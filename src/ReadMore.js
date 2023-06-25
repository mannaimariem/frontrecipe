/* eslint-disable no-restricted-globals */
import React from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import { useState } from "react";

function ReadMore({ recipes }) {
  const [comments, setComments] = useState([
    { commentId: 1, userName: "Mariem Jawedi", textComment: "Very delicious" },
    { commentId: 2, userName: "Nour Jawedi", textComment: "Great recipe" },
  ]);

  const { id } = useParams();
  const foundRecipe = recipes.find((el) => el.id === +id);

  const addComnt = (comment) => {
    setComments(comments.concat(comment));
  };

  const deleteComnt = (commentId) => {
    setComments(comments.filter((comment) => comment.commentId !== commentId));
  };

  return (
    <>
      <div className="info_section">
        <div className="movie_header">
          <h1>{foundRecipe.title}</h1>
        </div>
        <div className="movie_desc">
          <p className="text">{foundRecipe.description}</p>
        </div>
        <div className="movie_header">
          <h3>Ingredients</h3>
        </div>
        <div className="movie_desc">
          <p className="text">{foundRecipe.ingredients}</p>
        </div>
        <div className="movie_header">
          <h3>Preparation</h3>
        </div>
        <div className="movie_desc">
          <p className="text">{foundRecipe.preparation}</p>
        </div>
        <div className="movie_header">
          <h3>Comments</h3>
        </div>
        <div>
          <CommentsList
            addComnt={addComnt}
            comments={comments}
            deleteComnt={deleteComnt}
          />
        </div>
      </div>
    </>
  );
}

export default ReadMore;
