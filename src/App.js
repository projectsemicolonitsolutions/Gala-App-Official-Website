import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import Header from "./components/header";
import Hero from "./components/hero";
import Overview from "./components/overview";
import Tutorial from "./components/tutorial";
import Features from "./components/features";
import LatestBlog from "./components/latestBlog";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Overview />
      <Tutorial />
      <Features />
      <LatestBlog />
    </div>
  );
}

export default App;
