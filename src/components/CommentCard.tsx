import React from 'react';

interface ICommentProps {
  comment: string;
  user: string;
  createdAt: Date;
}

const CommentCard: React.FC<ICommentProps> = ({ comment, user, createdAt }) => {
  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              className="mr-2 w-6 h-6 rounded-full object-cover"
              src=""
              alt=""
            />
            {user}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {createdAt.toDateString()}
          </p>
        </div>
      </footer>
      <p>{comment}</p>
    </article>
  );
};

export default CommentCard;
