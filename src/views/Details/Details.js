import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function getRecipe() {
      const url = `http://localhost:3001/recipes/${id}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }

    getRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{recipe.name}</h1>
      <img
        className="w-full max-w-[600px] h-auto mb-4"
        src={recipe.image}
        alt={recipe.name}
      />
      <p>{recipe.description}</p>
      <h2 className="text-xl font-bold mt-4">Ingredients</h2>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mt-4">Steps</h2>
      <p>{recipe.steps}</p>
    </div>
  );
}
