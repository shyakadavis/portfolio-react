import React from 'react';
import Button from './ui/Button';

const CommentForm = () => {
  return (
    <form className="mb-6">
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          //   rows="6"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <Button children={'Post Comment'} />
    </form>
  );
};

export default CommentForm;
