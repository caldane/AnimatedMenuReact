import React from "react";
import Game from "./Components/Game/Game";
import "./styles.css";

const App = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const menuClassName = showMenu ? "grid open" : "grid";

  return (
    <>
      <section>
        <label>Testing</label>
        <menu data-open={showMenu}>
          <ul>
            <li>The Grid is {showMenu ? "shown" : "hidden"}</li>
            <li>Hello</li>
          </ul>
        </menu>
      </section>
      <button onClick={() => setShowMenu(!showMenu)}>Click me</button>
    </>
  );
};

export default App;
