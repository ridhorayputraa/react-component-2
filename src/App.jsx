import React from "react";
import ToDo from "./containers/ToDo.jsx";
import { Link } from "react-router";

function App() {
  return (
    <div className="App">
      <ToDo />
      <Link to={"/about"}>Ke about</Link>
      <br />
      <Link to={"/"}>Ke Home</Link>
    </div>
  );
}

export default App;
