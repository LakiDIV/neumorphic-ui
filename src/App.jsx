import "./App.css";
import SocialFloating from "./components/Footers/SocialFloating";
import HamburgerBtn from "./components/HamburgerMenu/HamburgerBtn";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
function App() {
  return (
    <>
      {" "}
      <ThemeToggle />
      <HamburgerBtn />
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
        <div className="bento">
          <div className="bento-item wider">
            <h1>Neomorphic Design</h1>
          </div>
          <div className="bento-item">
            <h2>What is Neomorphic Design?</h2>
            <p>
              Neomorphic design, also known as Neumorphism, is a modern design
              trend that emphasizes a soft, realistic, and tactile user
              interface. It draws inspiration from the physical world, creating
              elements that appear to rise from or be embedded into the screen.
            </p>
          </div>
          <div className="bento-item">
            <h2>Why do we use Neomorphic Design?</h2>
            <p>
              Neomorphic design aims to provide a more intuitive and engaging
              user experience by mimicking the physicality of objects. It adds a
              sense of depth and realism to digital interfaces, making users
              feel more connected to the content.
            </p>
          </div>
          <div className="bento-item">
            <h2>Key Principles of Neomorphic Design</h2>
            <p>
              Neomorphic design is characterized by subtle shadows, gradients,
              and soft edges. It often involves using a light source to create a
              sense of depth, giving the impression that elements are raised or
              pressed into the background.
            </p>
          </div>
          <div className="bento-item">
            <h2>Applying Neomorphism in UI/UX</h2>
            <p>
              When implementing Neomorphic design, designers focus on creating
              elements that are visually appealing and user-friendly. The goal
              is to strike a balance between realism and usability, enhancing
              the overall aesthetic of digital products.
            </p>
          </div>
          <div className="bento-item">
            <h2>Challenges and Considerations</h2>
            <p>
              While Neomorphic design offers a fresh and innovative approach,
              it's important to consider accessibility and readability. Ensuring
              sufficient contrast and maintaining a user-friendly experience are
              crucial aspects of successfully implementing this design trend.
            </p>
          </div>
          <div className="bento-item">
            <h2>Conclusion</h2>
            <p>
              Neomorphic design represents a shift towards creating more
              lifelike and visually engaging digital interfaces. It provides a
              unique opportunity for designers to explore new aesthetics and
              deliver a modern and immersive user experience.
            </p>
          </div>
        </div>
      </div>
      <div className="contanier embosed-flat">
        <div className="little-frame light-concave">
          <p>©️ Artify Pixels 2023</p>
        </div>
      </div>
      <br /> <br /> <br />
      <br /> <br /> <br />
      <SocialFloating />
      {/* TEst */}
      <button>Click me</button>
    </>
  );
}

export default App;
