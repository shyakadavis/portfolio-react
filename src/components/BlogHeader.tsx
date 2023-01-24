import React from 'react';
import Avatar from '../assets/images/avatar.jpg';

interface Props {
  title: string;
  caption?: string;
  cover?: string;
  createdAt?: string;
}
const BlogHeader: React.FC<Props> = ({ cover, title, caption, createdAt }) => {
  return (
    <header className="mb-4 lg:mb-6 not-format">
      <address className="flex items-center mb-6 not-italic">
        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
          <img
            className="mr-4 w-16 h-16 rounded-full object-cover"
            src={Avatar}
            alt="Davis"
          />
          <div>
            <a
              href="#"
              rel="author"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              SHYAKA Davis
            </a>
            <p className="text-base font-light text-gray-500 dark:text-gray-400">
              Software Developer, wanna-be writer, among other things...
            </p>
            <p className="text-base font-light text-gray-500 dark:text-gray-400">
              {createdAt}
            </p>
          </div>
        </div>
      </address>
      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
        {title}
      </h1>
      <h2 className="mb-4 text-xl font-bold leading-tight text-gray-900 dark:text-white">
        {caption}
      </h2>
      <img src={cover} alt="" srcSet="" />
    </header>
  );
};

export default BlogHeader;
