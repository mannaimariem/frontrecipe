import React from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";

function CommentsList({ comments, addComnt, deleteComnt }) {
  const handleDelete = (commentId) => {
    deleteComnt(commentId);
  };

  return (
    <div>
      <AddComment addComnt={addComnt} />
      {comments.map((el) => (
        <Comment key={el.commentId} comment={el}   deleteComnt={handleDelete} />
      ))}
    </div>
  );
}

export default CommentsList;
