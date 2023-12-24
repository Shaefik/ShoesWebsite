import React,{useState,useEffect} from 'react'
import './Admin.css'
import { productData } from '../Assets/productData'
import { Link } from 'react-router-dom';
function AdminAdd() {
    const [productDataState, setProductDataState] = useState(productData);
    const [product, setProduct] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [size, setSize] = useState(5);
    const [oldPrice, setOldPrice] = useState(2999);
    const [newPrice, setNewPrice] = useState(1999);
    const [selectBrand, setSelectBrand] = useState('');
    const [selectGender, setSelectGender] = useState(''); 
    
  
    useEffect(() => {
      console.log(productDataState);
    }, [productDataState]);
  
    function handleAddProduct() {
      // Find the maximum id in the existing productData array
      const maxId = Math.max(...productDataState.map((product) => product.id), 0);
  
      // Calculate the next id as the maximum id + 1
      const nextId = maxId + 1;
  
      // Create a new product object with the calculated next id
      const newProduct = {
        id: nextId,
        name: product,
        img: imgUrl,
        size: parseInt(size),
        price: parseInt(newPrice),
        oldPrice: parseInt(oldPrice),
        brand: selectBrand,
        gen: selectGender,
      };
  
      // Update the productData array
      const updatedProductData = [...productDataState, newProduct];
  
      // Update the state of productData
      setProductDataState(updatedProductData);
 
  
      // Log the updated data (for testing)
      console.log(updatedProductData);

      
  
      // Reset the form fields
      setProduct('');
      setImgUrl('');
      setSize(5);
      setOldPrice(2999);
      setNewPrice(1999);
      setSelectBrand('');
      setSelectGender('');
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
    <button onClick={handleAddProduct}>Add Product</button>
    
    
</div>

        
    </div>
  )
}

export default AdminAdd