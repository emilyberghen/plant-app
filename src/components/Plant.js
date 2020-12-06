import React from "react";
import CareList from "./CareList";

function Plant({ name, description, care }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h2>{name}</h2>
      <p>{description}</p>
      <CareList list={care} />
    </section>
  );
}

export default Plant;