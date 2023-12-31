import "./HamburgerBtn.css";
import "./HamburgerMenu.css";

import React, { useEffect, useState } from "react";
import "./HamburgerBtn.css";

export default function HamburgerBtn() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      document.body.classList.toggle("active");
      setMenuVisible(!isMenuVisible);
    };

    const button = document.querySelector(".m_button");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, [isMenuVisible]);

  return (
    <div>
      <div className="m_button">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`m_menu embosed-flat ${isMenuVisible ? "visible" : ""}`}>
        <button className="btn-clicky">HOME</button>
        <button className="btn-clicky">PORTFOLIO</button>
        <button className="btn-clicky">PRICES</button>
      </div>
    </div>
  );
}
