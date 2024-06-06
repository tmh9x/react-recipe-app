import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  async function getRecipes() {
    const url = "http://localhost:3001/recipes";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("data", data);
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="container mx-auto p-4 ">
      <ul className="flex flex-wrap justify-center">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="m-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[200px]">
              <Link to={`/${recipe.id}`}>
                <img
                  className="w-full h-[150px] object-cover"
                  src={recipe.image}
                  alt={recipe.name}
                />
              </Link>
              <div className="p-4">
                <h2 className="text-sm font-semibold break-words">
                  {recipe.name}
                </h2>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
