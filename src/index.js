import React from "react";
import { render } from "react-dom";
import Plants from "./components/Plants";
import data from "./data/plants.json";

render(
  <Plants plants={data} />,
  document.getElementById("root")
);