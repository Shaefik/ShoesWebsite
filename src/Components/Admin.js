import React, { useState, useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from './MyContext';
import './Admin.css'


function Admin() {
  const { productDataState, setProductDataState , editedProductDataState,setEditedProductDataState,edited,setEdited} = useContext(MyContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState('');
  const [newImg, setNewImg] = useState('');
  const [newSize, setNewSize] = useState(5);
  const [editOldPrice, setEditOldPrice] = useState(2999);
  const [editNewPrice, setEditNewPrice] = useState(3999);
  const [newBrand, setNewBrand] = useState('');
  const [editGen, setEditGen] = useState('');

  const handleDel = (productId) => {
    const updatedProductData = productDataState.filter((data) => data.id !== productId);
    setProductDataState(updatedProductData);
  };


  const handleEdit = () => {
   
    if (selectedProduct) {
      const updatedProducts = productDataState.map((product) =>
        product.id === selectedProduct.id
          ? {
              ...product,
              name: newProduct,
              img: newImg,
              brand: newBrand,
              gen: editGen,
              oldPrice: editOldPrice,
              price: editNewPrice,
              size: newSize,
            }
          : product
      );
      setProductDataState(updatedProducts);
      setEditedProductDataState(updatedProducts)
      setEdited(!edited)


      resetForm();
    }
  };
  useEffect(()=>{
    console.log('edited is::', editedProductDataState)
  },[handleEdit])

  const resetForm = () => {
    setSelectedProduct(null);
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
      <div>
        <div className="nav-admin">
          <Link to='/all' >
          <i class="fa fa-home" style={{ marginLeft: '40px', fontSize: '30px', color:'black',marginTop:'20px'  }} ></i>

          </Link>

          <Link to="/addproduct">
            <button>Add Product</button>
            
          </Link>
          <Link  to='/adminuser '>
          <button>User Details</button>
          </Link>
        </div>
        <div>
          {productDataState.map((data) => (
            <div key={data.id}>
              <h2>id: {data.id}</h2>
              <h4>Product Name: {data.name}</h4>
              <h4>Image url: {data.img}</h4>
              <h4>Brand: {data.brand}</h4>
              <h4>Category: {data.gen}</h4>
              <h4>Old Price: {data.oldPrice}</h4>
              <h4>New Price: {data.price}</h4>
              <h4>Size: {data.size}</h4>
              <h5>Description: {data.description}</h5>
              <button onClick={() => handleDel(data.id)}className='del-btn' >Del Product</button>
              <button onClick={() => setSelectedProduct(data)} className='edit-btn'>Edit</button>

              {selectedProduct && selectedProduct.id === data.id && (
                <div>
                  <input
                    placeholder="Enter product name"
                    value={newProduct}
                    onChange={(e) => setNewProduct(e.target.value)}
                  />
                  <input
                    placeholder="Enter product url"
                    value={newImg}
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
                    placeholder="Enter old price :"
                    type="number"
                    value={editOldPrice}
                    onChange={(e) => setEditOldPrice(e.target.value)}
                  />
                  <input
                    placeholder="Enter new price :"
                    type="number"
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
                  <button onClick={handleEdit} className='save-btn'>Save Changes</button>
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Admin;
