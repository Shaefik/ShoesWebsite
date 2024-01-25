import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { productData } from '../Assets/productData'; 
import MyContext from './MyContext';
import UserAccount from './UserAccount';
import Search from './Search';

function Navbar({ onToggleUserDetails }) {
  const {loginData,setLoginData,clientData,showUserDetails,setShowUserDetails} = useContext(MyContext)
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log(clientData);
    console.log(searchResults
      
      )
  }, [showUserDetails]);
  


  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
    if (onToggleUserDetails) {
  
      onToggleUserDetails(loginData.email)
    }
  };


  return (
    <div id="navbar-head">
      <Link to='/all'>
      <span className='head'>My Ecom</span>
      </Link>
  
      <div className='tags-head'>
        <div className='tags'> 
          <Link to='/all' className='links' >All</Link>
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
        {/* <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='search-btn' onClick={handleSearch}>Search</button> */}
      <div>
         
        </div>
       <Link to='/liked'>
       <i className="fa fa-heart" id='hrt' style={{ marginLeft: '40px', fontSize: '20px'  }}></i>

       </Link>


        <Link to='/cart'><i className="fa" id='cart-icon'>&#xf07a;</i></Link>
       
        <div>
         
        </div>


        <i className='fa' id='admin-icon' onClick={toggleUserDetails}>&#xf2bd;</i>
      
       
       <Link to='/adminlogin'> <p  class='fas'  id='admin'>admin</p></Link>
       

      </div>
    </div>
  );
}

export default Navbar;
