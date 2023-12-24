import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { productData } from '../Assets/productData'; // Import your product data
import MyContext from './MyContext';

function Navbar() {
  const {loginData,setLoginData,clientData} = useContext(MyContext)
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showUserDetails,setShowUserDetails] = useState(false)

  useEffect(() => {
    console.log(clientData);
  }, [showUserDetails]);
  
  // Function to handle search
  const handleSearch = () => {
    // Filter products based on the search term
    const results = productData.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    // Update the search results state
    setSearchResults(results);
  };

  const toggleUserDetails = ()=>{
    setShowUserDetails(!showUserDetails)
  }

  return (
    <div className="navbar-head">
      <span className='head'>My Ecom</span>
      <div className='tags-head'>
        <div className='tags'> 
          <Link to='/men' className='links'>Mens</Link>
          <Link to='/women' className='links'>Womens</Link>
          <Link to='/adidas' className='links'>Adidas</Link>
          <Link to='/puma' className='links'>Puma</Link>
          <Link to='/nike' className='links'>Nike</Link>
          <Link to='/crocs' className='links'>Crocs</Link>
          <Link to='/skechers' className='links'>Skechers</Link>
          <Link to='/newbalance' className='links'>New Balance</Link>
          <Link to='/fila' className='links'>Fila</Link>
        </div>
      </div>
     
      <div className="search-box">
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='search-btn' onClick={handleSearch}>Search</button>
        <div>
         
        </div>
        <Link to='/cart'><i className="fa" id='cart-icon'>&#xf07a;</i></Link>
        <div>
          {showUserDetails && (
             <>
               <div className='userdetail'>
                  <span>{loginData.email}</span>
                  <button>Logout</button>
               </div>
             </>
             
          )}
     

        </div>
        <i className='fa' id='admin-icon' onClick={toggleUserDetails}>&#xf2bd;</i>
       
       <Link to='/admin'> <i  class='fas'  id='admin'>&#xf508;</i></Link>

      </div>
    </div>
  );
}

export default Navbar;
