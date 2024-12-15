import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div>Home halooo wahyu</div>
      <Link to={"/todo"}>Mengarah ke page Todo</Link>
    </>
  );
}

export default Home;
