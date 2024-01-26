import { useState } from "react";

function compare(a, b) {
  if (a.quantity < b.quantity) {
    return -1;
  }
  if (a.quantity > b.quantity) {
    return 1;
  }
  return 0;
}

function GroupItemByQuantity({ setList }) {
  const [QuantityCheckbox, setQuantityCheckbox] = useState(false);
  const handleQuantityCheckbox = (event) => {
    if (event.target.checked === true) {
      setList((currentList) => {
        const newArray = [...currentList];
        return newArray.sort(compare);
      });
    }
  };

  return (
    <section>
      <label forHTML="orderQuanity">Order list by quantities?</label>
      <input type="checkbox" onChange={handleQuantityCheckbox} />
    </section>
  );
}
export default GroupItemByQuantity;
