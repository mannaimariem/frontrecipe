import React from "react";
import RecipeCard from "./RecipeCard";
import { useState } from "react";
import Add from "./Add";



const RecipeList = ({ recipes, addRecipe, deleteRecipe, updateRecipe}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div>
      <button onClick={handleShow}> Add </button>
      <Add show={show} handleClose={handleClose} addRecipe={addRecipe} />
      {recipes.map((el) => (
        <RecipeCard recipe={el} deleteRecipe={deleteRecipe} updateRecipe={updateRecipe}  />
      ))}
    </div>
  );
};

export default RecipeList;
