import React from "react";
import "./ToDoForm.css";

export default function ToDoForm(props) {
  console.log("ran function ToDoForm")
  const [date, setDate] = React.useState("");
  console.log(date)
  const [item, setItem] = React.useState("");
  console.log(item)
  
  const addItem2 = (event) => {
    console.log("ran addItem2")
    event.preventDefault();
    let item2 = document.querySelector("[name=item]").value;
    let date2 = document.querySelector("[name=date]").value;
    let itemStatus = "Current";
    let formStatus = document.querySelector("[name=status]").value;
    props.addItem(item2, date2, itemStatus, formStatus);
    setItem("");
    setDate("");
  };
  // console.log(props.item2, props.date2, props.itemStatus, props.formStatus)
  console.log("after addItem2")
  const handleItemChange = (event) => {
    console.log("ran handleItemChange")
    setItem(event.target.value)
  }
  console.log("after handleItemChange")
  const handleDateChange = (event) => {
    console.log("ran handleDateChange")
    setDate(event.target.value)
  }
  console.log("after handleDateChange")
 var statusDropDown = props.statusDropDown.map(function (option) {
  console.log("ran statusDropDownChange")
  console.log(props.statusDropDown, option)
    return<option key = {option.key}>{option.value}</option>
  })
  console.log(statusDropDown)
  console.log("after statusDropDownChange")
  const handleFormStatusChange = (event) => {
    console.log("handleFormStatusChange called")
    debugger
    event.preventDefault();
    let status2 = document.querySelector("[name=status").value;
    props.handleFormStatusChange(status2);
  }
  debugger
  console.log(props.handleFormStatusChange)
  return (
    <form action="#" method="GET" className="todo-form" onSubmit={addItem2}>
        <select className="dropdown-toggle" name="status" onChange={handleFormStatusChange}>{statusDropDown}</select>
        <label className="todo-label">
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
