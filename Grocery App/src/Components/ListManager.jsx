import { useState } from "react";
import List from "./List";
import AddItem from "./AddItem";

function ListManager() {
  const [listArray, setList] = useState(["eggs", "milk"]);
  return (
    <>
      <h2>Our Grocery List</h2>
     <AddItem setList={setList}/>
      <ul>
        <List listItems={listArray}/>
      </ul>
    </>
  );
}

export default ListManager;
