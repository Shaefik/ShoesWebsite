
import { useState } from 'react';
import './StoreItems.css'

function StoreItem() {
  const [items, setItems] = useState(['BMW', 'Merc', 'Land Rover']);
  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleEditItem = (index) => {
    setEditItem(index);
  };

  const handleSaveItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = newItem;
    setItems(updatedItems);
    setEditItem(null);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
        <h3 class="totalItems">Total items : {items.length}</h3>
      <table class="container" >
        <tbody  >
          {items.map((item, index) => (
            <tr key={index} >
              {editItem === index ? (
                <>
                  <td>
                    <input
                    class =" input"
                      type="text"
                      value={newItem}
                      onChange={(e) => setNewItem(e.target.value)}
                    />
                  </td>
                  <td>
                    <button class="saveBtn" onClick={() => handleSaveItem(index)}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td  >{item}</td>
                  <div class="btns">
                  <td>
                    <button class="editBtn" onClick={() => handleEditItem(index)}>Edit</button>
                  </td>
                  <td>
                    <button class='deleteBtn' onClick={() => removeItem(index)}>Delete</button>
                  </td>

                  </div>
                
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div class="newItem">
      <input
   
        type='text'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button  onClick={handleAddItem}>Add item</button>

      </div>
     
    </div>
  );
}

export default StoreItem;
