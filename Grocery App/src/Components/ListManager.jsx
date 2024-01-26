import { useState } from "react";
import List from "./List";

function ListManager() {
  const [list, setList] = useState(["eggs", "milk"]);
  return (
    <>
      <h2>Our Grocery List</h2>
      <ul>
        <List listItems={list} addItem={setList} />
      </ul>
    </>
  );
}

export default ListManager;
