import React from "react";
import "./ListItem.css";

export default function ListItem(props) {
  console.log("ran ToList ListItems.js")
  let handleClick = () => {
    console.log("ran handleClick")
    props.deleteItem(props.id);
  };
  return (
    <li>
      {props.item} {props.date} {props.status} {props.id}
      <button className="btn-list-format" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
}
