import "./App.css";
import React from "react";
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";

function App() {
  let [listItems, setListItems] = React.useState([
  ]);
  let [nextKey, setNextKey] = React.useState([1]);
   const addItem = (item, date) => {
    if (item === "") {
      alert("Item field empty");
      return;
    }
    setListItems([...listItems, {item, date, key: nextKey }]);
    setNextKey(nextKey + 1);
  };
  const deleteItem = (targetkey) => {
    setListItems(listItems.filter((item) => item.key !== targetkey));
  };
  return (
    <div className="App">
      <h1>Things To Do</h1>
      <main>
        <ToDoForm addItem={addItem} />
        <ToDoList items={listItems} deleteItem={deleteItem} />
      </main>
    </div>
  );
}

export default App;
