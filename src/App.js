import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ReadMore from "./ReadMore";
import "./App.css";
import { useState } from "react";
import Search from "./Search";
import RecipeList from "./RecipeList";


function App() {
  const [keyword, setKeyword] = useState("");
  const [newRate, setNewrate] = useState(1);
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Pot Roast",
      rating: "4",
      description:
        " Let the slow cooker do the work of making dinner while you go about your day. This pot roast is super flavorful, thanks to the addition of a packet of dried onion soup mix. Serve the meat and veggies over egg noodles or rice. ",
      posterURL:
        "https://img.buzzfeed.com/buzzfeed-static/static/2023-04/19/15/asset/7deeb3e4c431/sub-buzz-2309-1681919530-8.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
      ingredients: `for 6 servings

      6 tablespoons butter
      1 onion, chopped
      ½ cup flour(60 g)
      3 cups chicken broth(720 mL)
      1 teaspoon salt
      1 teaspoon pepper
      1 cup heavy cream(240 mL)
      2 ½ cups frozen mixed vegetable(455 g)
      1 rotisserie chicken, shredded
      2 tubes biscuit dough, 8 biscuits each`,
      preparation: `Place the chuck roast in a 7-quart (6 ½ liters) slow cooker and season with salt and pepper.
      Sprinkle the onion soup pack and top with vegetables and water.
      Cook on low for 8 hours, or high for 4-5 hours.
      Enjoy!`,
    },
    {
      id: 2,
      title: "Chicken & Biscuit Bake",
      rating: "5",
      description:
        "It doesn't get easier than this: store-bought biscuits, frozen mixed veggies, and rotisserie chicken come together in a warming, hearty dish everyone will love.",
      posterURL:
        "https://img.buzzfeed.com/buzzfeed-static/static/2022-12/1/22/asset/cff42e284f3b/sub-buzz-554-1669934111-2.jpg?downsize=900:*&output-format=auto&output-quality=auto",
      ingredients: `for 5 servings

      3 lb chuck roast(1.5 kg)
      salt, to taste
      pepper, to taste
      1 oz dried onion soup mix(30 g)
      1 onion, diced
      3 gold potatoes, diced
      3 large carrots, chopped
      ½ cup water(120 mL)`,
      preparation: `Preheat oven to 350˚F (180˚C).
      In a large pot over medium-high heat, melt the butter.
      Add the onion, stir until softened. About 1 minute.
      Whisk in the flour, stirring constantly to prevent the flour from browning. About 1 minute.
      Whisk in the chicken broth, salt, and pepper. Continue to whisk until no lumps remain.
      Whisk in the heavy cream. Bring to a light simmer until the sauce has thickened slightly. Test for additional salt/pepper.
      Add the mixed vegetables and shredded chicken, stir until fully incorporated.
      Transfer to a 9x13-inch (23x33 cm) baking dish.
      Evenly top with 12 pieces of biscuit dough (you will have extra biscuits, which can be baked off separately).
      Bake in a preheated oven for 20 minutes, until the biscuits are golden and the gravy mixture is bubbling.
      Cool slightly before serving.
      Enjoy!`,
    },
    {
      id: 3,
      title: "Taco Soup",
      rating: "1",
      description:
        "Just dump and go with this easy taco soup recipe. Don't forget to dress it up with your favorite toppings!",
      posterURL:
        "https://img.buzzfeed.com/buzzfeed-static/static/2022-12/1/22/asset/b5c4533ef59e/sub-buzz-472-1669934224-1.jpg?downsize=900:*&output-format=auto&output-quality=auto",
      ingredients: `for 6 servings

      1 lb lean ground beef(454 g)
      1 small onion, chopped
      15 oz canned kidney bean(425 g), 1 can
      15 oz canned black bean(425 g), 1 can
      15 oz canned corn kernels(425 g), 1 can
      15 oz canned diced tomato(425 g), 1 can
      8 oz tomato sauce(225 g), 1 can
      2 tablespoons taco seasoning
      1 shredded cheddar cheese, to serve
      1 sour cream, to serve
      1 pico de gallo, to serve
      1 avocado, sliced, to serve
      1 tortilla chip, to serve
      1 lime wedge, to serve
      1 chopped cilantro, to serve`,
      preparation: `Add the ground beef and onion to a large pot and stir until the beef is cooked through.
      Drain excess liquid.
      Add the kidney beans, black beans, corn, tomatoes, tomato sauce, and taco seasoning to the pot, and stir until combined.
      Cook over medium heat for 10 minutes.
      Serve with cheddar cheese, sour cream, pico de gallo, avocado, corn chips, lime wedges, and cilantro.
      Enjoy!`,
    },
  ]);


  const search = (text) => {
    setKeyword(text);
  };
  const setRate = (rate) => {
    setNewrate(rate);
  };
  const addRecipe = (recipe) => {
    setRecipes(recipes.concat(recipe));
  };
  const deleteRecipe = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };
  const updateRecipe = (recipeId, updatedRecipeData) => {
    setRecipes((prevRecipes) => {
      return prevRecipes.map((recipe) => {
        if (recipe.id === recipeId) {
          return { ...recipe, ...updatedRecipeData };
        }
        return recipe;
      });
    });
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
