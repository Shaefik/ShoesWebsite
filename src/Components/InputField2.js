
import React, { useState } from 'react';

function StoreItems() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
  };

  const handleSaveItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = newItem;
    setItems(updatedItems);
    setEditIndex(null);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <p>Items Length: {items.length}</p>
      <ul>
        {items.map((item, index) => (
          <tr key={index}>
            {editIndex === index ? (
              <div>
                <td>
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                /></td>
              <td> <button onClick={() => handleSaveItem(index)}>Save</button></td>
              </div>
            ) : (
              <div>
               <td><h3>{item}</h3> </td>
               
               <td> <button onClick={() => handleEditItem(index)}>Edit</button></td>
              </div>
            )}
           <td> <button onClick={() => handleRemoveItem(index)}>Delete</button></td>
          </tr>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export default StoreItems