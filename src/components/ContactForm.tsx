import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const inputLabelStyles = 'mt-5 mb-2 w-full';
  const inputFieldStyles =
    'bg-matte border border-gray-300 text-white text-sm rounded-lg outline-none focus:ring-1 focus:ring-tertiary w-full p-2.5';
  const errorFeedbackStyles = 'text-red-500 mt-1 w-full';

  // notification after  sending the message
  const notifySuccess = () =>
    toast.success(`Message Sent. I'll get back to you soon. 🙂`, {
      theme: 'colored',
    });
  return (
    <section>
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500)).then((e) => {
            notifySuccess();
          });
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Names are required'),
          email: Yup.string().email().required('Email is required'),
          subject: Yup.string().required('Subject is required'),
          message: Yup.string().required('Message is required'),
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
              {/* their names */}
              <label
                htmlFor="name"
                style={{ display: 'block' }}
                className={inputLabelStyles}
              >
                Name
              </label>
              <input
                id="name"
                placeholder="Enter your name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputFieldStyles}
                style={
                  errors.name && touched.name ? { border: '2px solid red' } : {}
                }
              />
              {errors.name && touched.name && (
                <div className={errorFeedbackStyles}>{errors.name}</div>
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
                    ? { border: '2px solid red' }
                    : {}
                }
              />
              {errors.email && touched.email && (
                <div className={errorFeedbackStyles}>{errors.email}</div>
              )}
              {/* their subject */}
              <label
                htmlFor="subject"
                style={{ display: 'block' }}
                className={inputLabelStyles}
              >
                Subject
              </label>
              <input
                id="subject"
                placeholder="Enter your subject"
                type="text"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputFieldStyles}
                style={
                  errors.subject && touched.subject
                    ? { border: '2px solid red' }
                    : {}
                }
              />
              {errors.subject && touched.subject && (
                <div className={errorFeedbackStyles}>{errors.subject}</div>
              )}
              {/* their message */}
              <label
                htmlFor="message"
                style={{ display: 'block' }}
                className={inputLabelStyles}
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputFieldStyles}
                style={
                  errors.message && touched.message
                    ? { border: '2px solid red' }
                    : {}
                }
              ></textarea>
              {errors.message && touched.message && (
                <div className={errorFeedbackStyles}>{errors.message}</div>
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

export default ContactForm;
