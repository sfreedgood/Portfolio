import { Link } from "react-router-dom";
import "./App.css";

import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <h1>🚧 Under Construction 🚧</h1>
      <h3>
        In the meantime, please check out my <Link to="resume">CV</Link> and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/sam-freedgood/"
        >
          <img
            style={{ maxHeight: 22.5, verticalAlign: "sub" }}
            src="src/assets/LinkedIn-Blue-14-Γäó@2x.png"
            alt="linkedin logo with link"
          />
        </a>
      </h3>
    </>
  );
}

export default App;
