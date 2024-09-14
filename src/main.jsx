import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import SocialFloating from "./components/Footers/SocialFloating";
import HamburgerBtn from "./components/HamburgerMenu/HamburgerBtn";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeToggle />
    <HamburgerBtn />
    <App />
    <br />
    <br /> <br />
    <br /> <br /> <br />
    <br /> <br /> <br /> <br />
    <SocialFloating />
  </React.StrictMode>
);
