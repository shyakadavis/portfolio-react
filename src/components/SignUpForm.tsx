import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {
  const inputLabelStyles = 'mt-5 mb-2 w-full';
  const inputFieldStyles =
    'bg-matte border border-gray-300 text-white text-sm rounded-lg outline-none focus:ring-1 focus:ring-tertiary w-full p-2.5';
  const errorFeedbackStyles = 'text-red-500 mt-1 w-full';

  return (
    <section className="w-full">
      <Formik
        initialValues={{
          surname: '',
          givenName: '',
          email: '',
          password: '',
          confirm_password: '',
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object().shape({
          surname: Yup.string().required('Surname is required'),
          givenName: Yup.string().required('Given Name is required'),
          email: Yup.string().email().required('Email is required'),
          password: Yup.string().required('Password is required'),
          confirm_password: Yup.string().when('password', {
            is: (val: []) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref('password')],
              'Passwords do not match',
            ),
          }),
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
              {/* their surname */}
              <label
                htmlFor="surname"
                style={{ display: 'block' }}
                className={inputLabelStyles}
              >
                Surname
              </label>
              <input
                id="surname"
                placeholder="Enter your surname"
                type="text"
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputFieldStyles}
                style={
                  errors.surname && touched.surname
                    ? { border: '1px solid red' }
                    : {}
                }
              />
              {errors.surname && touched.surname && (
                <div className={errorFeedbackStyles}>{errors.surname}</div>
              )}
              {/* their givenName */}
              <label
                htmlFor="givenName"
                style={{ display: 'block' }}
                className={inputLabelStyles}
              >
                GivenName
              </label>
              <input
                id="givenName"
                placeholder="Enter your givenName"
                type="text"
                value={values.givenName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputFieldStyles}
                style={
                  errors.givenName && touched.givenName
                    ? { border: '1px solid red' }
                    : {}
                }
              />
              {errors.givenName && touched.givenName && (
                <div className={errorFeedbackStyles}>{errors.givenName}</div>
              )}
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
              {/* their confirm_password */}
              <label
                htmlFor="confirm_password"
                style={{ display: 'block' }}
                className={inputLabelStyles}
              >
                Confirm Password
              </label>
              <input
                id="confirm_password"
                placeholder="Confirm your password"
                type="password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputFieldStyles}
                style={
                  errors.confirm_password && touched.confirm_password
                    ? { border: '1px solid red' }
                    : {}
                }
              />
              {errors.confirm_password && touched.confirm_password && (
                <div className={errorFeedbackStyles}>
                  {errors.confirm_password}
                </div>
              )}
              {/* the submit button */}
              <button
                type="button"
                className="border focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 my-5"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
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

export default SignUpForm;
