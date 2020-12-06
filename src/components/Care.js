import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Care({ name, value, icon }) {
  return (
    <li>
      <FontAwesomeIcon icon={icon} />
      {name}: {value}
    </li>
  );
}