import React, { ChangeEvent, useEffect } from 'react';
import { Field, Formik, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import FileUpload from './FileUpload';

const CreateBlog = () => {
  const inputLabelStyles = 'mt-5 mb-2 w-full';
  const inputFieldStyles =
    'bg-matte border border-gray-300 text-white text-sm rounded-lg outline-none focus:ring-1 focus:ring-tertiary w-full p-2.5';
  const errorFeedbackStyles = 'text-red-500 mt-1 w-full';

  const notifySuccess = (message: string) =>
    toast.success(`${message} 🙂`, {
      theme: 'colored',
    });
  const notifyError = (message: string) =>
    toast.error(`${message} 😟`, {
      theme: 'dark',
    });

  return (
    <>
      <main>
        <Formik
          initialValues={{
            image: '',
            title: '',
            caption: '',
            content: '',
          }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 2000)).then(
              (e) => {
                notifySuccess(`Posted Successfully`);
              },
            );
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={Yup.object().shape({
            // image: Yup.array()
            //   .of(
            //     Yup.object().shape({
            //       file: Yup.mixed().test('fileSize', 'fileSize', (value) =>
            //         value ? value.size < 1 : false,
            //       ),
            //     }),
            //   )
            //   .required('Image is required'),
            title: Yup.string().required('Title is required'),
            caption: Yup.string().required('Caption is required'),
            content: Yup.string().required('Content is required'),
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded-xl border border-tertiary bg-primary">
                  {/* this is the left side section - the image upload */}
                  <section>
                    {/* the image image */}
                    <div className="text">
                      <Field
                        name="image"
                        value={values.image}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        component={FileUpload}
                        style={
                          errors.image && touched.image
                            ? { border: '2px solid red' }
                            : {}
                        }
                      />
                      {errors.image && touched.image && (
                        <div className={errorFeedbackStyles}>
                          {errors.image}
                        </div>
                      )}
                    </div>
                  </section>
                  {/* this is the right side section - the post content */}
                  <section>
                    {/* the title */}
                    <label
                      htmlFor="title"
                      style={{ display: 'block' }}
                      className={inputLabelStyles}
                    >
                      Title
                    </label>
                    <input
                      id="title"
                      placeholder="Enter the title"
                      type="text"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputFieldStyles}
                      style={
                        errors.title && touched.title
                          ? { border: '2px solid red' }
                          : {}
                      }
                    />
                    {errors.title && touched.title && (
                      <div className={errorFeedbackStyles}>{errors.title}</div>
                    )}
                    {/* the caption */}
                    <label
                      htmlFor="caption"
                      style={{ display: 'block' }}
                      className={inputLabelStyles}
                    >
                      Caption
                    </label>
                    <input
                      id="caption"
                      placeholder="Enter the caption"
                      type="text"
                      value={values.caption}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputFieldStyles}
                      style={
                        errors.caption && touched.caption
                          ? { border: '2px solid red' }
                          : {}
                      }
                    />
                    {errors.caption && touched.caption && (
                      <div className={errorFeedbackStyles}>
                        {errors.caption}
                      </div>
                    )}
                    {/* the content */}
                    <label
                      htmlFor="content"
                      style={{ display: 'block' }}
                      className={inputLabelStyles}
                    >
                      Content
                    </label>
                    <textarea
                      id="content"
                      placeholder="Enter the content"
                      value={values.content}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputFieldStyles}
                      style={
                        errors.content && touched.content
                          ? { border: '2px solid red' }
                          : {}
                      }
                    ></textarea>
                    {errors.content && touched.content && (
                      <div className={errorFeedbackStyles}>
                        {errors.content}
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
                      className=" border focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-secondary text-black border-gray-600 hover:bg-complementary hover:border-gray-600 focus:ring-gray-700 my-5 disabled:text-gray-400 disabled:bg-[#7c9b47] disabled:cursor-not-allowed"
                    >
                      Submit
                    </button>
                  </section>
                </div>
              </form>
            );
          }}
        </Formik>
      </main>
    </>
  );
};

export default CreateBlog;
