function List({ listItems }, { addItem }) {
  console.log(listItems);

  return listItems.map((item) => {
    return <li>{item}</li>;
  });
}

export default List;
