// AdminEdit.js
import React, { useState, useContext } from 'react';
import MyContext from './MyContext';


function AdminEdit({data}) {
  const {
    productDataState,
    setProductDataState,
  } = useContext(MyContext);

  const [newProduct, setNewProduct] = useState('');
  const [newImg, setNewImg] = useState('');
  const [newSize, setNewSize] = useState(5);
  const [editOldPrice, setEditOldPrice] = useState(2999);
  const [editNewPrice, setEditNewPrice] = useState(3999);
  const [newBrand, setNewBrand] = useState('');
  const [editGen, setEditGen] = useState('');

  const handleEdit = (data) => {
    const editedProductData = [...productDataState];
    const index = editedProductData.findIndex((item) => item.product === newProduct);

    if (index !== -1) {
      editedProductData[index] = {
        product: newProduct,
        imgUrl: newImg,
        size: newSize,
        oldPrice: editOldPrice,
        newPrice: editNewPrice,
        selectBrand: newBrand,
        selectGender: editGen,
      };

      setProductDataState(editedProductData);
      resetForm();
    }

    console.log(productDataState);
  };

  const resetForm = () => {
    setNewProduct('');
    setNewImg('');
    setNewSize(5);
    setEditOldPrice(2999);
    setEditNewPrice(3999);
    setNewBrand('');
    setEditGen('');
  };

  return (
    <>
   
    <div id='edit-outer'>
      <input
        placeholder='Enter product name'
        value={newProduct}
        className='input-name'
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <input
        placeholder='Enter product url'
        value={newImg}
        className='input-url'
        onChange={(e) => setNewImg(e.target.value)}
      />
      <label>Select Brand</label>
      <select value={newBrand} onChange={(e) => setNewBrand(e.target.value)}>
        <option>Adidas</option>
        <option>Puma</option>
        <option>Nike</option>
        <option>Crocs</option>
        <option>Skechers</option>
        <option>New Balance</option>
        <option>Fila</option>
      </select>
      <label>Select Category</label>
      <select value={editGen} onChange={(e) => setEditGen(e.target.value)}>
        <option>Men</option>
        <option>Women</option>
      </select>
      <input
        placeholder='Enter old price :'
        type='number'
        value={editOldPrice}
        onChange={(e) => setEditOldPrice(e.target.value)}
      />
      <input
        placeholder='Enter new price :'
        type='number'
        value={editNewPrice}
        onChange={(e) => setEditNewPrice(e.target.value)}
      />
      <label>Select Size</label>
      <select value={newSize} onChange={(e) => setNewSize(e.target.value)}>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
      </select>
      <button onClick={handleEdit}>Save Changes</button>
    </div>
    </>
  );
}

export default AdminEdit;
