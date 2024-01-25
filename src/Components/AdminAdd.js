import React,{useState,useEffect, useContext} from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom';
import MyContext from './MyContext';
function AdminAdd() {
    const {productDataState,setProductDataState, product,setProduct,imgUrl,setImgUrl,size,setSize,oldPrice,setOldPrice,newPrice,setNewPrice,selectBrand,setSelectBrand,selectGender,setSelectGender} = useContext(MyContext)
    const nav = useNavigate();
    
   
  
    function handleAddProduct() {
      const maxId = Math.max(...productDataState.map((product) => product.id), 0);
  
      const nextId = maxId + 1;
  
      const newProduct = {
        id: nextId,
        name: product,
        img: imgUrl,
        size: parseInt(size),
        price: parseInt(newPrice),
        oldPrice: parseInt(oldPrice),
        brand: selectBrand.toLowerCase(),  
       gen: selectGender.toLowerCase(), 
      };
      
  
      const updatedProductData = [...productDataState, newProduct];
  
      setProductDataState(updatedProductData);
      alert('1 item added!!!')
      console.log(updatedProductData);
      
  
      setProduct('');
      setImgUrl('');
      setSize(5);
      setOldPrice(2999);
      setNewPrice(1999);
      setSelectBrand('');
      setSelectGender('');

      nav('/admin')
      
    }
  return (
    <div>  <div className='outer-admin' >
    <input 
    placeholder='Enter Product Details'
    type='text'
    value={product}
    onChange={(e)=>setProduct(e.target.value)} />
    <input
    placeholder='Enter image url'
    type='text'
    value={imgUrl}
    onChange={(e)=>setImgUrl(e.target.value)}
    />
    <input
    placeholder='Enter Size'
    type='number'
    value={size}
    onChange={(e)=>setSize(e.target.value)}
    />
    <input
    placeholder='Enter Old Price'
    type='number'
    value={oldPrice}
    onChange={(e)=>setOldPrice(e.target.value)}
    />
    <input
    placeholder='Enter New Price'
    type='number'
    value={newPrice}
    onChange={(e)=>setNewPrice(e.target.value)}
    />
   <p>Select Brand</p>
   <select value={selectBrand} onChange={(e)=>setSelectBrand(e.target.value)}>
    <option>Adidas</option>
    <option>Puma</option>
    <option>Nike</option>
    <option>Crocs</option>
    <option>Skechers</option>
    <option>New Balance</option>
    <option>Fila</option>
   </select>
    <p>Select Gender</p>
    <select value={selectGender} onChange={(e)=>setSelectGender(e.target.value)}>
      <option>Men</option>
      <option>Women</option>

    </select>
    <button onClick={handleAddProduct} className='add-btn-product'>Add Product</button>
    
    
</div>

        
    </div>
  )
}

export default AdminAdd