import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Tutorial from "./components/tutorial";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Tutorial />
    </div>
  );
}

export default App;
