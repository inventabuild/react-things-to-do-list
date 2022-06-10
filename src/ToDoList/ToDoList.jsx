import React from "react";
import "./ToDoList.css";
import ListItem from "./ListItem/ListItem";

export default function ToDoList(props) {
  let ListItemsJsx = props.items.map((dummyvar) => (
    <ListItem
      item={dummyvar.item}
      date={dummyvar.date}
      key={dummyvar.key}
      id={dummyvar.key}
      deleteItem={props.deleteItem}
    />
  ));
  return <ul className="todo-list">{ListItemsJsx}</ul>;
}
