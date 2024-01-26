import { useState } from "react";
import List from "./List";
import GroupItemByQuantity from "./GroupItemByQuantity";
import AddItem from "./AddItem";

function ListManager() {
  const defaultList = [
    {
      name: "eggs",
      quantity: 2,
    },
    {
      name: "milk",
      quantity: 72,
    },
    {
      name: "bread",
      quantity: 2,
    },
    {
      name: "cheese",
      quantity: 4,
    },
    {
      name: "bacon",
      quantity: 1,
    },
  ];

  const [listArray, setList] = useState(defaultList);
  return (
    <>
      <h2>Our Grocery List</h2>
      <AddItem setList={setList} />
      <GroupItemByQuantity setList={setList} />
      <ul>
        <List listItems={listArray} />
      </ul>
    </>
  );
}

export default ListManager;
