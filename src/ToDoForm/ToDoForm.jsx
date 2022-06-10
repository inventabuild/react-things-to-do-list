import React from "react";
import "./ToDoForm.css";

export default function ToDoForm(props) {
  const addItem = (event) => {
    event.preventDefault();
    let item = document.querySelector("[name=item]").value;
    let date = document.querySelector("[name=date]").value;
    props.addItem(item, date);
    document.querySelector("[name=item]").value = "";
    document.querySelector("[name=date]").value = "";
  };
  return (
    <form action="#" method="GET" className="todo-form" onSubmit={addItem}>
      <label className="toddo-label">
        Item:
        <input type="text" name="item" className="item-field" />
      </label>
      <label>
        Date:
        <input type="date" data-date-format="YYYY MM DD" name="date" className="date-field" />
      </label>
      <button type="submit" className="btn-form-format">
        Add
      </button>
    </form>
  );
}
