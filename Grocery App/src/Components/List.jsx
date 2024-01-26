import SingleItem from './SingleItem';

function List({ listItems }) {
  return listItems.map((item,i) => {
    return <SingleItem key={`${i}`+item} singleItem={item} />
});

}

export default List;
