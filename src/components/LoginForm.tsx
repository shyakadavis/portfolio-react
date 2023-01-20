import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const inputLabelStyles = 'mt-5 mb-2 w-full';
  const inputFieldStyles =
    'bg-matte border border-gray-300 text-white text-sm rounded-lg outline-none focus:ring-1 focus:ring-tertiary w-full p-2.5';
  const errorFeedbackStyles = 'text-red-500 mt-1 w-full';

  return (
    <section className="w-full">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500)).then((e) => {
            alert(JSON.stringify(values, null, 2));
          });
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
            <form onSubmit={handleSubmit}>
              {/* their email */}
              <label
                htmlFor="email"
                style={{ display: 'block' }}
                className={inputLabelStyles}
              >
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputFieldStyles}
                style={
                  errors.email && touched.email
                    ? { border: '1px solid red' }
                    : {}
                }
              />
              {errors.email && touched.email && (
                <div className={errorFeedbackStyles}>{errors.email}</div>
              )}
              {/* their password */}
              <label
                htmlFor="password"
                style={{ display: 'block' }}
                className={inputLabelStyles}
              >
                Password
              </label>
              <input
                id="password"
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
              {errors.password && touched.password && (
                <div className={errorFeedbackStyles}>{errors.password}</div>
              )}

              {/* the submit button */}

              <button
                type="submit"
                disabled={isSubmitting}
                className=" border focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-secondary text-black border-gray-600 hover:bg-complementary hover:border-gray-600 focus:ring-gray-700 my-5 disabled:text-gray-400 disabled:bg-[#557A15]"
              >
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};

export default LoginForm;
