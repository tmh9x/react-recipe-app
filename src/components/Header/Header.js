import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold dark:text-white">React Grundlagen 6</h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
      >
        {theme === "light" ? (
          <MoonIcon className="h-6 w-6 text-black" />
        ) : (
          <SunIcon className="h-6 w-6 text-white" />
        )}
      </button>
    </header>
  );
}
