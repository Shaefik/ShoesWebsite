// ProductLogin.js
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { productData } from './productData';

import './ProductLogin.css';
import MyContext from '../MyContext';

function ProductLogin() {
   const {currentPage,setCurrentPage} = useContext(MyContext)
    const [selectedCategory, setSelectedCategory] = useState('');
    const { products, setProducts } = useContext(MyContext);

  const { clientData } = useContext(MyContext);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    console.log(clientData)
  })

  const filteredProducts = productData.filter(
    (product) => !selectedCategory || product.category === selectedCategory
);


  useEffect(() => {
    if (isButtonClicked) {
      const matchingUser = clientData.find(
        (user) => user.email === userEmail && user.password === userPassword
      );

      if (matchingUser) {
        navigate('/samplecart');
        const selectedProduct= filteredProducts[currentPage]
        setProducts((prevProduct)=>[...prevProduct,selectedProduct])
      } else {
        setError('Invalid email or password');
      }
      setIsButtonClicked(false); 
    }
  }, [userEmail, userPassword, navigate, setError, isButtonClicked, clientData]);

  const handleLogin = () => {
    setIsButtonClicked(true);
  };

  return (
    <div className="outer-box">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter email or phone"
        className="email-text"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      {isButtonClicked && error && <p>{error}</p>}

      <button className="btn-login" onClick={handleLogin}>
        Login
      </button>

      <p>
        Don't have an account? <Link to="/productsignup">Sign-up</Link>
      </p>
    </div>
  );
}

export default ProductLogin;
