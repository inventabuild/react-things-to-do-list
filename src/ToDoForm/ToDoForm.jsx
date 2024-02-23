import React from "react";
import "./ToDoForm.css";

export default function ToDoForm(props) {
  const [item, setItem] = React.useState("");
  const [date, setDate] = React.useState("");
  const addItem2 = (event) => {
    event.preventDefault();
    props.addItem(item, date, "Current", props.dropdownValue); // Pass dropdownValue from props
    setItem("");
    setDate("");
  };

  const handleItemChange = (event) => {
    setItem(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleFormStatusChange = (event) => {
    const status = event.target.value;
    props.handleFormStatusChange(status);
  };

  const statusDropDown = props.statusDropDown.map((option) => (
    <option key={option.key} value={option.value}>{option.value}</option>
  ));
  return (
    <form action="#" method="GET" className="todo-form" onSubmit={addItem2}>
      <select className="dropdown-toggle" name="status" onChange={handleFormStatusChange} value={props.dropdownValue}>
        {statusDropDown}
      </select>
      <label className="todo-label">
        Item:
        <input type="text" name="item" className="item-field" onChange={handleItemChange} value={item} />
      </label>
      <label className="todo-label">
        Date:
        <input type="date" name="date" className="date-field" onChange={handleDateChange} value={date} />
      </label>
      <button type="submit" className="btn-form-format">Add</button>
    </form>
  );
}