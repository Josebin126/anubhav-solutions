"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark and light mode"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? "☼" : "☾"}
    </button>
  );
}