import React from "react";

export default function Care({ water, light, fertilization, repot }) {
  return (
    <li>
      {water} {light} {fertilization} {repot}
    </li>
  );
}