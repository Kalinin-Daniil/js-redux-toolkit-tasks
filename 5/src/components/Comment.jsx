import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ commentId }) => {
  // BEGIN (write your solution here)
  const comments = useSelector(state => state.commentsReducer);
  const users = useSelector(state => state.usersReducer.users);

  const comment = comments.find(c => c.id === commentId);
  const author = users.find(u => u.id === comment.author);
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
