import {  useState } from "react";
import { MoonIcon, SunIcon } from "../icons";

const ThemeToggle = () => {
  const [darkmode,setDarkmode]=useState(false)

  const toggleTheme = () => {
    setDarkmode(!darkmode);
    document.documentElement.classList.toggle('dark')
  };
  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-full border border-gray-400 bg-white px-4 py-2 shadow-neutral-800 dark:border-white/20 dark:bg-black"
      aria-label="Toggle Theme"
    >
     
      {darkmode && <MoonIcon className="h-5 w-5 " />}
       {!darkmode && <SunIcon className="h-5 w-5 " />}
    </button>
  );
};

export default ThemeToggle;
