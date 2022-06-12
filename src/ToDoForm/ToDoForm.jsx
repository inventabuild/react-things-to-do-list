import React from "react";
import "./ToDoForm.css";

export default function ToDoForm(props) {
  const [item, setItem] = React.useState("");
  const [date, setDate] = React.useState("");
  const addItem = (event) => {
    event.preventDefault();
    let item = document.querySelector("[name=item]").value;
    let date = document.querySelector("[name=date]").value;
    props.addItem(item, date);
    setItem("");
    setDate("");
    document.querySelector("[name=date]").value = "";
  };
  const handleItemChange = (event) => {
    setItem(event.target.value)
  }
  const handleDateChange = (event) => {
    setDate(event.target.value)
  }
  return (
    <form action="#" method="GET" className="todo-form" onSubmit={addItem}>
      <label className="toddo-label">
        Item:
        <input type="text" name="item" className="item-field" onChange={handleItemChange} value={item}/>
      </label>
      <label>
        Date:
        <input type="date" name="date" className="date-field" onChange={handleDateChange} value={date}/>
      </label>
      <button type="submit" className="btn-form-format">
        Add
      </button>
    </form>
  );
}
