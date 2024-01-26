import { useState } from "react";

function AddItem({setList}) {
    const [newItem, setNewItem] = useState("");
    const [newQuantity, setNewQuantity] = useState(0);

    const handleSubmit = (event)=>{
        event.preventDefault();
        if (newQuantity > 0 && newItem){
        setList((currentList)=>{
            const addNewItem = {
                name: newItem,
                quantity: +newQuantity
            }
            const newList = [...currentList, addNewItem];
            return newList;
        });

        setNewItem('');
        setNewQuantity(0);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="newItem">New Item:</label>
            <input 
                id="newItem" 
                type="text" 
                value={newItem}
                onChange={ (event) => {setNewItem (event.target.value)}}
                />
            <label htmlFor="newQuantity">New Quantity:</label>
            <input 
                id="newQuantity" 
                type="number" 
                value={newQuantity}
                onChange={ (event) => {setNewQuantity (event.target.value)}}
                />
                {
                !newQuantity > 0 || !newItem ? 
                <p>Please fill the fields</p> : null
                }
            <button>
                Add Item
            </button>
        </form>
    )
}

export default AddItem;