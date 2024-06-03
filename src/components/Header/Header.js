import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <div className="p-4 bg-gray-800 text-white">
      <Link to="/" className="text-xl font-bold hover:underline">
        Recipes
      </Link>
    </div>
  );
}
