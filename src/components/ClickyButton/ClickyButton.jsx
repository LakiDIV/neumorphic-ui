import React from "react";
// import './ClickyButton.css';

function ClickyButton({ children }) {
  return <button className="btn-clicky">{children}</button>;
}

export default ClickyButton;
