import React from "react";
import { render } from "react-dom";
import './App.css';

import Plants from "./components/Plants";
import data from "./data/plants.json";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTint, faSun, faUtensils, faSeedling } from '@fortawesome/free-solid-svg-icons'

library.add(faTint, faSun, faUtensils, faSeedling);

render(
  <Plants plants={data} />,
  document.getElementById("root")
);