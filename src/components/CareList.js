import React from "react";
import Care from "./Care";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CareList({ list }) {
  return (
    <div class="care">
      <h3>Care</h3>
      <FontAwesomeIcon icon="caret-down" />
      <ul>
        {list.map((care, i) => (
          <Care key={i} {...care} />
        ))}
      </ul>
    </div>
  );
}