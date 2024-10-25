import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ commentId }) => {
  // BEGIN (write your solution here)
  const comments = useSelector((state) => state.commentsReducer.entities);
  const users = useSelector((state) => state.usersReducer.entities);

  const comment = comments[commentId];
  const author = users[comment.author];
  // END

  if (!author || !comment) {
    return null;
  }

  return (
    <>
      <h5 className="card-title">{author.name}</h5>
      <p className="card-text">{comment.text}</p>
    </>
  );
};

export default Comment;
