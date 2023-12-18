import React, { useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    navigate('/')
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
      <a className="project" style={{ color: 'white' }} onClick={toggleDropdown}>
  Project
</a>
      {isDropdownVisible && (
   <div className='link-container'>
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
          <br />
          <Link to="/childcomponent" onClick={closeDropdown}className='links'>Child Component</Link>
          <br />
          <Link to="/questions" onClick={closeDropdown}className='links'>Questions</Link>
          <br />
          <Link to="/quescontext" onClick={closeDropdown}className='links'>Questions using useContext</Link>
          <br />
          <Link to="/todo" onClick={closeDropdown}className='links'>Todo</Link>
          <br />
          <Link to="/signup" onClick={closeDropdown}className='links'>Signup Page</Link>
          <br />
          <Link to="/page" onClick={closeDropdown}className='links'> Page</Link>
          <br />
          <Link to='/register' onClick={closeDropdown} className='links'>Register</Link>
          <br />
          <Link  to='/productpage' onClick={closeDropdown} className='links'>Product Page</Link>
          <br />
          <Link  to='/productpagelogin' onClick={closeDropdown} className='links'>Product Page with Login</Link>
          <br />
          
           
        </div>
      )}
    </div>
  );
}

export default Navbar;




