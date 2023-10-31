import React, { useState } from 'react';

export default function MultipleDelete() {
  const [names, setNames] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [editId, setEditId] = useState(null);

  const handleClick = () => {
    let id = document.getElementById('txtId').value;
    let name = document.getElementById('txtName').value;
    let phone = document.getElementById('txtPhone').value;
    let count = document.getElementById('txtCount').value;
    let total = parseInt(count) * parseInt(phone);

    const itemToCheck = { id: id };
    const itemExists = names.some((item) => item.id === itemToCheck.id);
    if (itemExists) {
    } else {
      setNames((current) => [...current, { id, name, phone, count, total }]);
      let ta = totalAmount + total;
      setTotalAmount(ta);
    }
  };

  const handlePop = () => {
    const newArray = [...names];
    newArray.pop();
    setNames(newArray);
  };

  const handleRemoveByIndex = (indexToRemove) => {
    const updatedData1 = names.filter((item) => item.id === indexToRemove);
    const updatedData = names.filter((item) => item.id !== indexToRemove);
    setNames(updatedData);
    let fc = totalAmount - updatedData1[0].total;
    setTotalAmount(fc);
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleUpdate = (id) => {
    let newName = document.getElementById(`name_${id}`).value;
    let newPhone = document.getElementById(`phone_${id}`).value;
    let newCount = document.getElementById(`count_${id}`).value;
    let newTotal = parseInt(newPhone) * parseInt(newCount);

    const updatedData = names.map((item) =>
      item.id === id ? { ...item, name: newName, phone: newPhone, count: newCount, total: newTotal } : item
    );
    setNames(updatedData);

    let total = 0;
    updatedData.forEach((item) => {
      total += item.total;
    });
    setTotalAmount(total);
    setEditId(null);
  };

  return (
    <div>
      <div>
      <div className="d-grid gap-3">
                <button
                    type="button"
                    style={{ fontSize: 24, fontWeight: 'bold' }}
                    className="btn btn-primary btn-block"
                >
                    Total Cart Items: {names.length}
                </button>
                <br />
            </div>
        <br />
        <br/>
    
    Enter Id
    <br/>
    <input type='text' id="txtId"/>
    <br/>

    Enter Name
    <br/>
    <input type='text' id="txtName"/>
    <br/>
    <br/>
    Enter Price
    <br/>
    <input type='number' id="txtPhone"/>
    <br/>
    <br/>
    Enter Quantity
    <br/>
   
    <input type='number' id="txtCount"/>
    <br/>

    <br/>
    <button className="btn btn-info mx-2" onClick={handleClick}>
      Add
    </button>
    <p>    </p>
    <button className="btn btn-danger mx-2" onClick={handlePop}>
      Remove
    </button>
    <br/> <br/> <br/>
      </div>

      <div className="container">
        <table id="customers">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {names.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                {editId === item.id ? (
                  <>
                    <td>
                      <input type="text" id={`name_${item.id}`} defaultValue={item.name} />
                    </td>
                    <td>
                      <input type="number" id={`phone_${item.id}`} defaultValue={item.phone} />
                    </td>
                    <td>
                      <input type="number" id={`count_${item.id}`} defaultValue={item.count} />
                    </td>
                    <td>{item.total}</td>
                    <td>
                      <button  className="btn btn-info mx-2" onClick={() => handleUpdate(item.id)}>Update</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.count}</td>
                    <td>{item.total}</td>
                    <td>
                      <label className="label" onClick={() => handleEdit(item.id)}>
                        Edit
                      </label>{' '}
                      |{' '}
                      <label className="label" onClick={() => handleRemoveByIndex(item.id)}>
                        Delete
                      </label>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <br />
        <br />
        <br />
        <table id="customers">
          <thead>
            <tr>
              <th>Cart item total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total amount is:</td>
              <td>{totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
