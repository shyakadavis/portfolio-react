import React from 'react';
import { FcReading, FcComments, FcLike } from 'react-icons/fc';
const Statistics = () => {
  return (
    <div className="grid mb-8 border bg-primary  rounded-lg shadow-sm border-tertiary md:mb-12 md:grid-cols-2">
      <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-tertiary rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Total Blog Posts
          </h3>
          <p className="my-4 font-light">7</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <FcReading size={50} />
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-tertiary rounded-tr-lg">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Total Comments
          </h3>
          <p className="my-4 font-light">7</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <FcComments size={50} />
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-tertiary rounded-bl-lg md:border-b-0 md:border-r">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Total Likes
          </h3>
          <p className="my-4 font-light">7</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <FcLike size={50} />
        </figcaption>
      </figure>
    </div>
  );
};

export default Statistics;
