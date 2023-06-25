import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import UpdateRecipeModal from "./UpdateRecipeModal";

const RecipeCard = ({ recipe, deleteRecipe, updateRecipe }) => {
  const [rating, setRating] = useState(1);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedRecipe, setUpdatedRecipe] = useState({
    _id: recipe._id,
    title: recipe.title,
    rating: recipe.rating,
    description: recipe.description,
    posterUrl: recipe.posterUrl,
    ingredients: recipe.ingredients,
    preparation: recipe.preparation,
  });

  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };

  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
  };

  const handleUpdateModalOpen = () => {
    setShowUpdateModal(true);
    setUpdatedRecipe({
      _id: recipe._id,
      title: recipe.title,
      rating: recipe.rating,
      description: recipe.description,
      posterUrl: recipe.posterUrl,
      ingredients: recipe.ingredients,
      preparation: recipe.preparation,
    });
  };

  const handleUpdateRecipe = () => {
    // Call the updateRecipe function with the updatedRecipe data
    updateRecipe(recipe._id, updatedRecipe);
    setShowUpdateModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({
      ...updatedRecipe,
      [name]: value,
    });
  };

  return (
    <>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={recipe.posterUrl}
              alt="recipe poster"
            />
            <h1>{recipe.title}</h1>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={recipe.rating}
              onStarClick={onStarClick}
            />
          </div>
          <div className="movie_desc">
            <p className="text">{recipe.description}</p>
          </div>
          <button onClick={() => deleteRecipe(recipe._id)}>Delete</button>
          <button onClick={handleUpdateModalOpen}>Update</button>
          <Link to={`/recipe/${recipe._id}`}>Read More</Link>
        </div>
        <div className="blur_back"></div>
      </div>

      <UpdateRecipeModal
        show={showUpdateModal}
        handleClose={handleUpdateModalClose}
        handleUpdate={handleUpdateRecipe}
        recipe={updatedRecipe}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default RecipeCard;
