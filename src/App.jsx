import React from "react";
import "./App.css";
import SocialFloating from "./components/Footers/SocialFloating";
import HamburgerBtn from "./components/HamburgerMenu/HamburgerBtn";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import BentoGrid from "./components/BentoGrid/BentoGrid";
import InputField from "./components/InputField/InputField";
import ClickyButton from "./components/ClickyButton/ClickyButton";

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <HamburgerBtn />

      {/* Login Form */}
      <div className="container embosed-flat">
        <div className="section light-concave">
          <InputField placeholder="Email" />
          <InputField placeholder="Password" type="password" />
          <ClickyButton>LOGIN</ClickyButton>
        </div>
      </div>

      <h1>Neomorphic Design Showcase</h1>
      <BentoGrid>
        {/* ... existing BentoGrid items ... */}
      </BentoGrid>

      {/* New Showcase */}
      <h2>Reusable Components Showcase</h2>
      <div className="showcase-container">
        <div className="showcase-item">
          <h3>Input Fields</h3>
          <InputField placeholder="Username" />
          <InputField placeholder="Email" type="email" />
          <InputField placeholder="Password" type="password" />
        </div>
        <div className="showcase-item">
          <h3>Clicky Buttons</h3>
          <ClickyButton>Submit</ClickyButton>
          <ClickyButton>Cancel</ClickyButton>
          <ClickyButton>Reset</ClickyButton>
        </div>
      </div>

      <SocialFloating />
    </div>
  );
}

export default App;
