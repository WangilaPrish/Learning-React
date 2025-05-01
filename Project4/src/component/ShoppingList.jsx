import React, { useState } from 'react';

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const addItem = (e) => {
        e.preventDefault(); // Prevent form submission
        if (name && quantity) {
            setItems([...items, { name, quantity }]);
            setName('');
            setQuantity('');
        }
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <form>
                <input
                    type="text"
                    placeholder="Enter item name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter item quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button onClick={addItem}>
                    Add to List
                </button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;
