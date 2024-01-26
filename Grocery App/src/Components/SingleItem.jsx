function SingleItem ({singleItem}){
   return (
   <li>
      <div>Item: {singleItem.name} </div>
      <div> Quantity: {singleItem.quantity}</div>
      </li>
      );
}

export default SingleItem;