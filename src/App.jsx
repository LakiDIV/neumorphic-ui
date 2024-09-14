import React from "react";
import "./App.css";

import BentoGrid from "./components/BentoGrid/BentoGrid";
import InputField from "./components/InputField/InputField";

function App() {
  return (
    <div className="App">
      {/* Input and Button */}
      <div className="bento embosed-flat">
        <div className="section light-concave">
          <InputField placeholder="Email" type="text" />
          <InputField placeholder="Password" type="password" />
          <button className="btn-clicky">LOGIN</button>
        </div>
      </div>

      <h1 style={{ textAlign: "center" }}>Neomorphic Design Showcase</h1>
      <BentoGrid>
        <BentoGrid.Item title="What is Neomorphism?" wide>
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
        <BentoGrid.Item title="Pros">
          <div className="card">
            <ul>
              <li>Modern and sleek appearance</li>
              <li>Enhances UI depth</li>
              <li>Creates a tactile feel</li>
            </ul>
          </div>
        </BentoGrid.Item>
        <BentoGrid.Item title="Cons">
          <div className="card">
            <ul>
              <li>Accessibility challenges</li>
              <li>Limited color palette</li>
              <li>Potential for overuse</li>
            </ul>
          </div>
        </BentoGrid.Item>
        <BentoGrid.Item title="Best Practices" wide>
          <div className="card">
            <p>
              Use neomorphism sparingly, focus on important UI elements, and
              ensure sufficient contrast for accessibility.
            </p>
          </div>
        </BentoGrid.Item>
        <BentoGrid.Item title="Tools">
          <div className="card">
            <ul>
              <li>Figma</li>
              <li>Sketch</li>
              <li>CSS generators</li>
            </ul>
          </div>
        </BentoGrid.Item>
      </BentoGrid>
    </div>
  );
}

export default App;
