import React, { useEffect } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  useEffect(() => {
    const toggleSwitch = document.querySelector(".toggle-checkbox");

    const setTheme = (darkMode) => {
      if (darkMode) {
        document.documentElement.setAttribute("data-theme", "light");
        toggleSwitch.checked = false;
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        toggleSwitch.checked = true;
      }
    };

    toggleSwitch.addEventListener("change", () => {
      const isDarkMode = toggleSwitch.checked;
      setTheme(isDarkMode);
    });

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: light)");
    setTheme(darkModeQuery.matches);

    darkModeQuery.addEventListener("change", (e) => {
      setTheme(e.matches);
    });

    return () => {
      toggleSwitch.removeEventListener("change", () => {});
      darkModeQuery.removeEventListener("change", () => {});
    };
  }, []);

  return (
    <div className="container">
      <label>
        <input className="toggle-checkbox" type="checkbox" />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <div
              className="iconify sun-icon"
              data-icon="feather-sun"
              data-inline="false"
            ></div>
          </div>
          <div className="toggle-button"></div>
          <div className="moon-icon-wrapper">
            <div
              className="iconify moon-icon"
              data-icon="feather-moon"
              data-inline="false"
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
}
