import { useState } from "react";

function AddItem({setList}) {
    const [newItem, setNewItem] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        setList((currentList)=>{
            const newList = [...currentList, newItem];
            return newList;
        });
        setNewItem("");
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
            <button>
                Add Item
            </button>
        </form>
    )
}

export default AddItem;