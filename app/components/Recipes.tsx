"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaUtensils,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from "react-icons/fa";

import Card from "./Card";
import SearchInput from "./SearchInput";
import Spinner from "./Spinner";
import RecipeItem from "./RecipeItem";

type RecipeType = {
  recipe: {
    uri: string;
    label: string;
    image: string;
    images: {
      SMALL: { url: string | null };
    };
    ingredients: {
      text: string;
      weight: number;
      image: string | null;
    }[];
    calories: number;
    mealType: string[];
  };
};

const fetchRecipes = async (name: string = "chicken") => {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${name}&app_id=${process.env.NEXT_PUBLIC_EDAMAM_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_SECRET}&diet=balanced`
  );

  return await response.json();
};

const Recipes = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [loading, setLoading] = useState(false);
  const [recipeIndex, setRecipeIndex] = useState(0);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetchRecipes("burger");
      setRecipes([...res.hits]);
      setLoading(false);
    })();
  }, []);

  const handleRecipeSearch = async (name: string) => {
    setLoading(true);
    const res = await fetchRecipes(name);
    setRecipes([...res.hits]);
    setLoading(false);
  };

  return (
    <>
      <div className="flex justify-center items-center text-white text-sm font-semibold mt-4">
        <FaUtensils className="w-6 h-6 mr-2" />
        <p>Search a recipe of any meal.</p>
      </div>
      <div className="flex justify-center items-center mt-3">
        <SearchInput onSearch={handleRecipeSearch} />
      </div>
      {!loading && recipes.length > 0 && (
        <h2 className="text-center text-lg font-bold text-white mt-6">
          {recipes[recipeIndex].recipe.label}
        </h2>
      )}
      <div className="flex justify-center space-x-3 mt-3">
        <Card>
          {!loading && recipes.length > 0 && (
            <div className="flex flex-col space-y-2 overflow-auto">
              {recipes[recipeIndex].recipe.ingredients.map((ing, index) => (
                <RecipeItem
                  key={ing.text + index}
                  text={ing.text}
                  weight={ing.weight}
                  image={ing.image}
                />
              ))}
            </div>
          )}
          {!loading && recipes.length === 0 && (
            <div className="flex justify-center items-center w-full">
              No Ingredients for Selected Recipe
            </div>
          )}
          {loading && (
            <div className="flex justify-center items-center w-full">
              <Spinner />
            </div>
          )}
        </Card>
        <div className="flex flex-col space-y-2">
          <div className="border border-dashed rounded-lg self-start w-[200px] h-[200px] flex">
            {!loading && recipes.length === 0 && (
              <div className="flex justify-center items-center w-full">
                Image Here
              </div>
            )}
            {!loading && recipes.length > 0 && (
              <Image
                className="rounded-lg overflow-hidden"
                src={recipes[recipeIndex].recipe.images.SMALL.url || "no-image"}
                width={200}
                height={200}
                alt="Recipe Image"
              />
            )}
            {loading && (
              <div className="flex justify-center items-center w-full">
                <Spinner />
              </div>
            )}
          </div>
          {!loading && recipes.length > 0 && (
            <div className="text-white">
              <p className="text-sm">
                <span className="font-bold">Calories:</span>{" "}
                {recipes[recipeIndex].recipe.calories}
              </p>
              <p className="text-sm">
                <span className="font-bold">Meal Type:</span>{" "}
                {recipes[recipeIndex].recipe.mealType[0]}
              </p>
              <div className="flex space-x-2 mt-2">
                {recipeIndex > 0 && (
                  <span
                    onClick={() => setRecipeIndex((prev) => prev - 1)}
                    className="border rounded-lg p-2 cursor-pointer hover:translate-y-0.5 transition-all duration-150"
                  >
                    <FaAngleDoubleLeft className="w-6 h-6" />
                  </span>
                )}
                {recipeIndex + 1 < recipes.length && (
                  <span
                    onClick={() => setRecipeIndex((prev) => prev + 1)}
                    className="border rounded-lg p-2 cursor-pointer hover:translate-y-0.5 transition-all duration-150"
                  >
                    <FaAngleDoubleRight className="w-6 h-6" />
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Recipes;
