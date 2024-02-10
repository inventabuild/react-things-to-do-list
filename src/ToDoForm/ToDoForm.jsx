import React from "react";
import "./ToDoForm.css";

export default function ToDoForm(props) {
  console.log("ran ToDoForm.jsx")
  const [item, setItem] = React.useState("");
  console.log(item)
  const [date, setDate] = React.useState("");
  const addItem2 = (event) => {
    event.preventDefault();
    let item2 = document.querySelector("[name=item]").value;
    let date2 = document.querySelector("[name=date]").value;
    let itemStatus = "Current";
    let formStatus = document.querySelector("[name=status]").value;
    props.addItem(item2, date2, itemStatus, formStatus);
    setItem("");
    setDate("");
  };
  const handleItemChange = (event) => {
    setItem(event.target.value)
  }
  const handleDateChange = (event) => {
    setDate(event.target.value)
  }
  // var keyholder = 0
 var statusDropDown = props.statusDropDown.map(function (option) {
    return<option key = {option.key}>{option.value}</option>
  }) 
//   var errMsg = ""
//   if (props.statusDropDown[0] === "Deleted") {
//     errMsg="Frodo shall not pass"
//     errMsg="X"
//   }
  const handleFormStatusChange = (event) => {
    console.log("handleFormStatusChange called")
    event.preventDefault();
    let status2 = document.querySelector("[name=status").value;
    
    props.handleFormStatusChange(status2);
  }
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
