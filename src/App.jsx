import React from "react";
import "./App.css";
import SocialFloating from "./components/Footers/SocialFloating";
import HamburgerBtn from "./components/HamburgerMenu/HamburgerBtn";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import BentoGrid from "./components/BentoGrid/BentoGrid";

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <HamburgerBtn />

      {/* Input and Button */}
      <div className="contanier embosed-flat">
        <div className="section light-concave">
          <input
            placeholder="Email"
            className="light-concave"
            type="text"
            name=""
            id=""
          />
          <input
            placeholder="Password"
            className="light-concave"
            type="password"
            name=""
            id=""
          />
          <button className="btn-clicky">LOGIN</button>
        </div>
      </div>

      <h1>Neomorphic Design Showcase</h1>
      <BentoGrid>
        <BentoGrid.Item title="What is Neomorphism?">
          <p>
            Neomorphism is a design trend that combines flat design with
            skeuomorphism, creating a soft, extruded plastic look.
          </p>
        </BentoGrid.Item>
        <BentoGrid.Item title="Key Characteristics" wide>
          <ul>
            <li>Soft shadows</li>
            <li>Subtle contrast</li>
            <li>Monochromatic color schemes</li>
            <li>Minimalist approach</li>
          </ul>
        </BentoGrid.Item>
        <BentoGrid.Item>
          <div className="card">
            <h2>Pros</h2>
            <ul>
              <li>Modern and sleek appearance</li>
              <li>Enhances UI depth</li>
              <li>Creates a tactile feel</li>
            </ul>
          </div>
        </BentoGrid.Item>
        <BentoGrid.Item>
          <div className="card">
            <h2>Cons</h2>
            <ul>
              <li>Accessibility challenges</li>
              <li>Limited color palette</li>
              <li>Potential for overuse</li>
            </ul>
          </div>
        </BentoGrid.Item>
        <BentoGrid.Item wide>
          <div className="card">
            <h2>Best Practices</h2>
            <p>
              Use neomorphism sparingly, focus on important UI elements, and
              ensure sufficient contrast for accessibility.
            </p>
          </div>
        </BentoGrid.Item>
        <BentoGrid.Item>
          <div className="card">
            <h2>Tools</h2>
            <ul>
              <li>Figma</li>
              <li>Sketch</li>
              <li>CSS generators</li>
            </ul>
          </div>
        </BentoGrid.Item>
      </BentoGrid>
      <SocialFloating />
    </div>
  );
}

export default App;
