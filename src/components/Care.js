import React from "react";

export default function Care({ care }) {
  return (
    <ul>
        <li>{care.water}</li>
        <li>{care.light}</li>
        <li>{care.fertilization}</li>
        <li>{care.repot}</li>
    </ul>
  );
}