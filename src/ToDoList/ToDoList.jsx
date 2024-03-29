import React from "react";
import "./ToDoList.css";
import ListItem from "./ListItem/ListItem";

export default function ToDoList(props) {
  if(props.itemsFiltered)
  {
  let ListItemsJsx = props.itemsFiltered.map((dummyvar) => (
    <ListItem
      item={dummyvar.item}
      date={dummyvar.date}
      status={dummyvar.status}
      key={dummyvar.key}
      id={dummyvar.key}
      deleteItem={props.deleteItem}
    />
  ))
  return <ul className="todo-list">{ListItemsJsx}</ul>
  }
}