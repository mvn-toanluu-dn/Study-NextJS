import React from "react";
import Intro from "./Intro";
import Product from "./Product";
import Vision from "./Vision";
import Service from "./Service"
import Needs from "./Needs"
import FadeIn from "../../components/Animations/FadeIn";
import Dream from "./Dream";
function Home(
) {
  return (
    <div className="page-home">
      <Intro />
      <Product />
      <Vision />
      <Service />
      <Needs />
      <Dream />
    </div>
  );
}

export default Home;
