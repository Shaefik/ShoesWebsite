
import React, { useState } from "react";

function AddCart() {
  const [id, setId] = useState(0);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState("");
  const [newQty, setNewQty] = useState(0);
  const [newPrice, setNewPrice] = useState(0);

  const addItem = () => {
    if (itemName && qty && price) {
      const newItemObject = {
        id: id,
        name: itemName,
        quantity: qty,
        price: price,
      };
      setItems([...items, newItemObject]);
      setId(0);
      setItemName("");
      setQty(0);
      setPrice(0);
    }
    console.log(items)
  };

  const editItemHandler  = (index) => {
    setEditItem(index);
    setNewQty(items[index].quantity);
    setNewPrice(items[index].price);
    
   
  };

  const updateItem = (index) => {
    if (newQty && newPrice) {
      const updatedItems = [...items];
      updatedItems[index].quantity = newQty;
      updatedItems[index].price = newPrice;
      setItems(updatedItems);
      setEditItem(null);
    }
  };

  const deleteItem = (index) => {
   const updatedItems = [...items];
   updatedItems.splice(index, 1);
   setItems(updatedItems);
 };

  return (
    <>
      <p>Enter id</p>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <p>Enter item name</p>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <p>Enter quantity</p>
      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
      <p>Enter price</p>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br></br>
      <br></br>
      <button onClick={addItem}>Add New Item</button>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{index === editItem ? <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} /> : item.name}</td>
              <td>{index === editItem ? <input type="number" value={newQty} onChange={(e) => setNewQty(e.target.value)} /> : item.quantity}</td>
              <td>{index === editItem ? <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} /> : item.price}</td>
              <td>{item.quantity * item.price}</td>
              <td>
                {index === editItem ? (
                  <button onClick={() => updateItem(index)}>Update</button>
                ) : (
                  <button onClick={() => editItemHandler(index)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
    
      </table>
    
     
    </>
  );
}

export default AddCart;
