import React from "react";
import "./ToDoList.css";
import ListItem from "./ListItem/ListItem";

export default function ToDoList(props) {
  console.log("ran ToDoList.jsx")
  console.log(props)
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
  debugger
  return <ul className="todo-list">{ListItemsJsx}</ul>
}
