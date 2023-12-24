import React,{useState,useEffect} from 'react'
import './Admin.css'
import { productData } from '../Assets/productData'
import { Link } from 'react-router-dom';

function Admin() {
  const [productDataState, setProductDataState] = useState(productData);
  const[updates,setUpdates] = useState([])

 
  
  return (
  
    <>
      <div>  
        <div className='nav-admin'>
          <Link to='/addproduct'><button>Add Product</button></Link>
          <Link to='/delproduct'><button>Del Product</button></Link>
          <Link to='/editproduct'><button>Edit Product</button></Link>
          
        </div>
        <div>
          {productDataState.map((data)=>(
            <>
             <h2>id :{data.id}</h2>
             <h4>Product Name : {data.name}</h4>
             <h4>Image url : {data.img}</h4>
             <h4>Brand : {data.brand}</h4>
             <h4>Category : {data.gen}</h4>
             <h4>Old Price : {data.oldPrice}</h4>
             <h4>New Price : {data.price}</h4>
             <h4>Size : {data.size}</h4>
             <hr></hr>
             
            
            </>
          ))}
        </div>

      </div>
    </>
  )
}

export default Admin