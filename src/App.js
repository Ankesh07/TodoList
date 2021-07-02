import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import Todos from "./components/Todos";

const App = () => {
  let initItems
  if (localStorage.getItem("items") === null) {
    initItems = [];
  } else {
    initItems = JSON.parse(localStorage.getItem("items"));
  }
  const [items, setItems] = useState(initItems);
  const [copyItems, setCopy] = useState([]);
  const onDelete = (item) => {
    setItems(items.filter((items) => items.id !== item.id));
    localStorage.setItem("items", JSON.stringify(items));
  };
  const onAdd = ({ title, desc }) => {
    let id 
    if(items.length === 0){
        id = 0;
    }
    else{
      id = items[items.length-1].id + 1;
    }
    const item = {
      id: id,
      title: title,
      desc: desc,
    };
    setItems([...items, item]);
  };
  const search = (searchItem) => {
      setCopy(items.filter((items) => items.title === searchItem));
  }
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <div>
      <>
        <Header appTitle="Todos List" search={search} />
        <Todos items={copyItems.length === 1?copyItems:items} onDelete={onDelete} onAdd={onAdd} />
      </>
    </div>
  );
};

export default App;
