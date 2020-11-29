import React from "react";
import CareList from "./Care";
import Care from "./Care";

function Plant({ name, description, care }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <p>{description}</p>
      <Care care={care} />
    </section>
  );
}

export default Plant;