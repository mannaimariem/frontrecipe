import React from "react";

function Comment({ comment, deleteComnt }) {
  const handleDeleteClick = () => {
    deleteComnt(comment.commentId);
  };

  return (
    <div className="info_section">
      <div className="movie_header">
        <h5>{comment.userName}</h5>
      </div>
      <div className="movie_desc">
        <p className="text">{comment.textComment}</p>
      </div>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Comment;
