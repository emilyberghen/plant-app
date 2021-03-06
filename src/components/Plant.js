import React from "react";
import CareList from "./CareList";
import monstera from '../images/monstera.jpg';
import ficus from '../images/ficus.jpg';
import strelitzia from '../images/strelitzia.jpg';
import zz from '../images/zz.jpg';

function Plant({ name, description, image, care }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image} alt={name}></img>
      <CareList list={care} />
    </section>
  );
}

export default Plant;