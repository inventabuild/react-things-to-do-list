import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";
import Header from "./Components/Header"
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";

// import ListItem from "./ToDoList/ListItem/ListItem";

function App() {
  console.log("ran App.js")
  let [listItems, setListItems] = React.useState([]);
  console.log(listItems)
  let [nextKey, setNextKey] = React.useState(1);
  let [listItemsFiltered, setListItemsFiltered] = React.useState([]);
  const addItem = (item, date, itemStatus, formStatus) => {
    if (item.replace(/^\s\s*/, '').replace(/\s\s*$/, '') === "") {
      alert("Item field empty");
      return;
    }
    let newListItems = [...listItems, {item, date, itemStatus, key: nextKey }];
    let newListItemsFiltered = newListItems.map(obj => ({...obj}));
    if (formStatus === "Deleted") {
      console.log("Deleted called")
      newListItemsFiltered = newListItemsFiltered.filter((item) => item.itemStatus === "Deleted");
    }
    else {
      console.log("Completed called")
      newListItemsFiltered = newListItemsFiltered.filter((item) => item.itemStatus === "Current");
    };
    setListItems(newListItems);
    setListItemsFiltered(newListItemsFiltered);
    setNextKey(nextKey + 1);
    console.log(newListItemsFiltered);
  };
  const deleteItem = (targetkey) => {
    debugger;
    console.log("deleteItem called");
    console.log(targetkey);
    const found = listItems.find(obj => {return obj.key === targetkey});
    console.log(found);
    listItems.find(obj => {return obj.key === targetkey}).itemStatus = "Deleted";
    console.log(listItems);
    debugger;
    let newListItems = listItems.filter((item) => item.key !== targetkey)
 

    let newListItemsFiltered = listItemsFiltered.filter((item) => item.key !== targetkey)
    // I don't think I need to change master list ListItems to newListItems
    // setListItems(newListItems);
    setListItemsFiltered(newListItemsFiltered);
    console.log(newListItemsFiltered);
  };
  const formStatusChange = (formStatus) => {
    debugger;
  console.log("formStatusChange called")
  if (formStatus === "Deleted") {
    console.log("Deleted called")
    console.log(listItemsFiltered);
    setListItemsFiltered(listItems.filter((item) => item.status === "Deleted"));
    // console.log(listItems[1].item)
    // setListItemsFiltered(listItemsFiltered.filter((x) => x.status === "Deleted"));
  }
  else {
    console.log("Completed called")
    console.log(listItemsFiltered);
    setListItemsFiltered(listItemsFiltered.filter((item) => item.status === "Current"));
    // setListItemsFiltered(listItemsFiltered.filter((x) => x.status === "Completed"));
  };
  };
  // const dropDownList = ["Current", "Deleted"];
  const dropDownList = [
    {key: 1, value: "Current"},
    {key: 2, value: "Deleted"}
  ]
  // const statusChange = (event) => {
    
  // }
 
  return (
    <div className="App">
      <nav className="header-nav">
          <a className="header-nav-link" href="/">Home</a>
          <a className="header-nav-link" href="./Contact">Contact Us</a>
      </nav>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
  function Home(){
    return (
      <>
        <Header />
        <ToDoForm addItem={addItem} statusDropDown={dropDownList} handleFormStatusChange = {formStatusChange} />
        <ToDoList itemsFiltered={listItemsFiltered} deleteItem={deleteItem} />
      </>
    );
  }
}

export default App;
