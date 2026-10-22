"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("anubhav-theme");

    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;

    setDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("anubhav-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("anubhav-theme", "light");
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? "☼" : "☾"}
    </button>
  );
}