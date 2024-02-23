import "./App.css";
import React , { useState, useEffect }  from "react";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";
import Header from "./Components/Header"
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";

function App() {
 
  const [nextKey, setNextKey] = React.useState(1);
  // property to save the current items
  const [currentItems, setCurrentItems] = React.useState([]);
   // property to deleted the current items
  const [deletedItems, setDeletedItems] = React.useState([]);
   // property to save the all items
  const [filteredItems, setFilteredItems] = React.useState([]);
   // property to maintain the dropdown state
  const [dropdownValue, setDropdownValue] = React.useState("Current");

// react hook to update the state of all the properties, just like useState
  useEffect(() => {
    const newFilteredItems = dropdownValue === "Deleted" ? deletedItems : currentItems;
    setFilteredItems(newFilteredItems);
  }, [dropdownValue, currentItems, deletedItems]);

  
  const addItem = (item, date, itemStatus, formStatus) => {
    if (item.trim() === "") {
      alert("Item field empty");
      return;
    }
    
    //here this will add a new item into the currentItem list as well as the main filteredItems list
    const newItem = { item, date, itemStatus, key: nextKey };
    if (formStatus === "Current") {
      setCurrentItems([...currentItems, newItem]);
      setFilteredItems(currentItems);
    }
    // if you try to add the item when the dropdown state is set as deleted this will not allow to add
    if (formStatus === "Deleted") {
      alert('Please change the state to Current to add a new task!');
    }
    setNextKey(nextKey + 1);
  };


  const deleteItem = (targetKey) => {

    // here we will delete the item and marked it as deleted into the main filteredItems list and save it into the deletedItems list so show
    let item = filteredItems.find(i => i.key == targetKey);
    setDeletedItems([...deletedItems, item])
    setFilteredItems(filteredItems.map(item => {
      if (item.key === targetKey) {
        item.itemStatus = "Deleted";
      }
      return item;
    }));

    // here we are removing the deleted item from the currentItems list so that it won't show under current items anymore
    setCurrentItems(currentItems.filter(item => item.key != targetKey));
  };

  const formStatusChange = (formStatus) => {
    // when we change the status dropdown this will filter out the items based on the current or deleted state
    setDropdownValue(formStatus);
    const newFilteredItems = formStatus === "Deleted" ? deletedItems : currentItems;
    setFilteredItems(newFilteredItems);
  };

  const dropDownList = [
    { key: 1, value: "Current" },
    { key: 2, value: "Deleted" }
  ];

  return (
    <div className="App">
      <nav className="header-nav">
          <a className="header-nav-link" href="/">Home</a>
          <a className="header-nav-link" href="./Contact">Contact Us</a>
      </nav>
      <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </div>
  );

  function Home() {
    return (
      <>
        <Header />
        <ToDoForm addItem={addItem} statusDropDown={dropDownList} dropdownValue={dropdownValue} handleFormStatusChange={formStatusChange} />
        <ToDoList itemsFiltered={filteredItems} deleteItem={deleteItem} />
      </>
    );
  }
}

export default App;
