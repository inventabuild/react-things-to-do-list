import React from "react";
import "./ListItem.css";

export default function ListItem(props) {
  let handleClick = () => {
    props.deleteItem(props.id);
  };
  return (
    <li>
      {props.item} {props.date}
      <button className="btn-list-format" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
}
