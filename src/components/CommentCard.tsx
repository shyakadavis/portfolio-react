import React from 'react';

interface ICommentProps {
  comment: string;
  surname: string;
  givenName: string;
  blog: string;
  createdAt: string;
}

const CommentCard: React.FC<ICommentProps> = ({ comment, surname, givenName, createdAt }) => {
  return (
    <article className="p-6 mb-6 text-base rounded-lg bg-primary">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center justify-between">
          <p className="inline-flex items-center mr-3 text-sm text-secondary">
            <img
              className="mr-2 w-10 h-10 rounded-full object-cover"
              // src="https://api.dicebear.com/5.x/bottts/png"
              // src={`https://api.dicebear.com/5.x/bottts-neutral/svg?seed=${givenName}`}
              src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${givenName}`}
              alt=""
            />
            {surname}{' '}{givenName}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {createdAt}
          </p>
        </div>
      </footer>
      <p>{comment}</p>
    </article>
  );
};

export default CommentCard;
