import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown =()=>{
    setDropdownVisible(!isDropdownVisible)
  }

  return (
    <div className="navbar-container">
      <Link to="/" className="tag">
        MY REACT APP
      </Link>
      <Link to="/" className="home">
        Home
      </Link>
      <a className="project" onClick={toggleDropdown} >
        Project
      </a>
      {isDropdownVisible && (
        <div class='link-container' >
          <Link to="/fact" onClick={closeDropdown} className='links' >Factorial</Link>
          <br />
          <Link to="/count"onClick={closeDropdown}className='links' >Counter</Link>
          <br />
          <Link to="/input" onClick={closeDropdown }className='links'>InputField</Link>
          <br />
          <Link to="/searchword" onClick={closeDropdown}className='links'>Search Word</Link>
          <br />
          <Link to="/storeitems" onClick={closeDropdown}className='links'>Store Items</Link>
          <br />
          <Link to="/addcart" onClick={closeDropdown}className='links'>Add Cart</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;




