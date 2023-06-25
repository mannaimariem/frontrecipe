import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ReadMore from "./ReadMore";
import "./App.css";
import { useState, useEffect } from "react";
import Search from "./Search";
import RecipeList from "./RecipeList";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5000/api/`,
});

function App() {
  const [keyword, setKeyword] = useState("");
  const [newRate, setNewrate] = useState(1);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/recipes");
        if (JSON.stringify(response.data) !== JSON.stringify(recipes)) {
          setRecipes(response.data);
          console.log(response.data);
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };
  
    fetchPosts();
  }, []);

  const search = (text) => {
    setKeyword(text);
  };
  const setRate = (rate) => {
    setNewrate(rate);
  };
  const addRecipe = async (recipe) => {
    try {
      const response = await api.post("/recipes", recipe);
      setRecipes(recipes.concat(response.data));
      console.log(response.data);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const deleteRecipe = async (recipeId) => {
    try {
      await api.delete(`/recipes/${recipeId}`);
      setRecipes(recipes.filter((recipe) => recipe._id !== recipeId));
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  const updateRecipe = async (recipeId, updatedRecipeData) => {
    try {
      const response = await api.put(`/recipes/${recipeId}`, updatedRecipeData);
      setRecipes((prevRecipes) => {
        return prevRecipes.map((recipe) => {
          if (recipe._id === recipeId) {
            return { ...recipe, ...response.data };
          }
          return recipe;
        });
      });
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  return (
    <>
      <Search search={search} setRate={setRate} newRate={newRate} />
      <Routes>
        <Route
          path="/"
          element={
            <RecipeList
              addRecipe={addRecipe}
              recipes={recipes.filter(
                (el) =>
                  el.rating >= newRate &&
                  el.title.toLowerCase().includes(keyword.toLowerCase().trim())
              )}
              deleteRecipe={deleteRecipe}
              updateRecipe={updateRecipe}
            />
          }
        />
        <Route path="/recipe/:id" element={<ReadMore recipes={recipes} />} />
      </Routes>
    </>
  );
}

export default App;
