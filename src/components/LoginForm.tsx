import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import client from '../api/client';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/home';

  // different styles for the labels fields, and error containers
  const inputLabelStyles = 'mt-5 mb-2 w-full';
  const inputFieldStyles =
    'bg-matte border border-gray-300 text-white text-sm rounded-lg outline-none focus:ring-1 focus:ring-tertiary w-full p-2.5';
  const errorFeedbackStyles = 'text-red-600 mt-1 w-full';
  return (
    <section className="w-full">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setFieldError }) => {
          try {
            const response = await client.post('/user/log_in', { ...values });
            const data = response.data;
            if (data.success === true) {
              login(data.data[0].token);
              navigate(from, { replace: true });
            } else if (data.success === false) {
              if (data.statusCode == 404) {
                Object.entries(data.data).forEach(([field, message]) => {
                  setFieldError('email', data.data[0].message);
                });
              } else if (data.statusCode == 401) {
                Object.entries(data.data).forEach(([field, message]) => {
                  setFieldError('password', data.data[0].message);
                });
              }
            }
          } catch (error: any) {
            console.log('Error logging in:, ', error.message);
          }
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              {/* their email */}
              <label
                htmlFor="email"
                style={{ display: 'block' }}
                className={inputLabelStyles}
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                className={inputFieldStyles}
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                style={
                  errors.email && touched.email
                    ? { border: '1px solid red' }
                    : {}
                }
              />
              <ErrorMessage
                name="email"
                component={'div'}
                className={errorFeedbackStyles}
              />

              {/* their password */}
              <label
                htmlFor="password"
                style={{ display: 'block' }}
                className={inputLabelStyles}
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputFieldStyles}
                style={
                  errors.password && touched.password
                    ? { border: '1px solid red' }
                    : {}
                }
              />
              <ErrorMessage
                name="password"
                component={'div'}
                className={errorFeedbackStyles}
              />

              {/* the submit button */}

              <button
                type="submit"
                disabled={isSubmitting}
                className=" border focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-secondary text-black border-gray-600 hover:bg-complementary hover:border-gray-600 focus:ring-gray-700 my-5 disabled:text-gray-400 disabled:bg-[#557A15]"
              >
                Log In
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default LoginForm;
