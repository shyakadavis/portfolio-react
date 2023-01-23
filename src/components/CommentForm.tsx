import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import client from '../api/client';

interface Props {
  postId: string;
}

const CommentForm: React.FC<Props> = ({ postId }) => {
  const inputLabelStyles = 'mt-5 mb-2 w-full';
  const inputFieldStyles =
    'bg-matte border border-gray-300 text-white text-sm rounded-lg outline-none focus:ring-1 focus:ring-tertiary w-full p-2.5';
  const errorFeedbackStyles = 'text-red-500 mt-1 w-full';

  // notification after  sending the comment
  const notifySuccess = (message: string) =>
    toast.success(`${message}. 🙂`, {
      theme: 'colored',
    });
  const notifyError = (message: string) =>
    toast.error(`${message} 😟`, {
      theme: 'dark',
    });
  return (
    <section>
      <Formik
        initialValues={{ comment: '' }}
        onSubmit={async (values, handleReset) => {
          try {
            const response = await client.post(
              `/post/create/comment/${postId}`,
              {
                ...values,
              },
            );
            const data = response.data;
            console.log(data);
            if (data.success === true) {
              notifySuccess(`Comment Sent. I'll get back to you soon`);
              handleReset.resetForm();
            } else {
              notifyError('Something went wrong');
            }
          } catch (error: any) {
            const message = error.response.data.data[0].message;
            notifyError(message);
          }
          // await new Promise((resolve) => setTimeout(resolve, 500)).then((e) => {
          //   notifySuccess();
          // });
          // alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object().shape({
          comment: Yup.string().max(100).required('Comment is required'),
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
              {/* their comment */}
              <label
                htmlFor="comment"
                style={{ display: 'block' }}
                className={inputLabelStyles}
              >
                Comment
              </label>
              <textarea
                id="comment"
                placeholder="Enter your comment"
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputFieldStyles}
                style={
                  errors.comment && touched.comment
                    ? { border: '1px solid red' }
                    : {}
                }
              ></textarea>
              {errors.comment && touched.comment && (
                <div className={errorFeedbackStyles}>{errors.comment}</div>
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
                className=" border focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-secondary text-black border-gray-600 hover:bg-complementary hover:border-gray-600 focus:ring-gray-700 my-5 disabled:text-gray-400 disabled:bg-[#557A15] disabled:cursor-not-allowed"
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

export default CommentForm;
