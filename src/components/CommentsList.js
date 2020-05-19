import React from 'react';

const CommentsList = ({ comments }) => (
  <>
    {comments.map((comment, key) => (
      <div key={key}>
      <h3>Comments</h3>
        <div className="comment" key={key}>
          <h4>{comment.username}</h4>
          <p>{comment.text}</p>
        </div>
      </div>
    ))}
  </>
);

export default CommentsList;
