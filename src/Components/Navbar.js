import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';




function Navbar() {
  const [search, setSearch] = useState('');
  

  

  return (
    <div className="navbar-head">
     
      <span class='head'>My Ecom</span>
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
          placeholder="Search "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='search-btn+-'>Search</button>
        <div >
         <Link to='/login' ><span>Login</span> </Link>
       
         <Link to='/signup' ><span>Sign up</span></Link>
         <Link to='/cart'>Cart</Link>
        </div>

      </div>
   
    </div>
  );
}

export default Navbar;
