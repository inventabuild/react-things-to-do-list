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
  let [listItems, setListItems] = React.useState([]);
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
      newListItemsFiltered = newListItemsFiltered.filter((item) => item.itemStatus === "Deleted");
    }
    else {    
      newListItemsFiltered = newListItemsFiltered.filter((item) => item.itemStatus === "Current");
    };
    setListItems(newListItems);
    setListItemsFiltered(newListItemsFiltered);
    setNextKey(nextKey + 1);
  };
  const deleteItem = (targetkey) => {
    const found = listItems.find(obj => {return obj.key === targetkey});
    listItems.find(obj => {return obj.key === targetkey}).itemStatus = "Deleted";
    let newListItems = listItems.filter((item) => item.key !== targetkey)
    
    let newListItemsFiltered = listItemsFiltered.filter((item) => item.key !== targetkey)
    setListItemsFiltered(newListItemsFiltered);
  };
  const formStatusChange = (formStatus) => {
  if (formStatus === "Deleted") {
    setListItemsFiltered(listItems.filter((item) => item.itemStatus === "Deleted"));
  }
  else {
    setListItemsFiltered(listItemsFiltered.filter((item) => item.itemStatus === "Current"));
  };
  };
  const dropDownList = [
    {key: 1, value: "Current"},
    {key: 2, value: "Deleted"}
  ]
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
