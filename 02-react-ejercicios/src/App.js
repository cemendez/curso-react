import React from "react";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <SongSearch />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
