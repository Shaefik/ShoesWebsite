// ProductDetail component
import React, { useContext } from 'react';
import Navbar from './Navbar';
import './ProductDetail.css';
import Footer from './Footer';
import MyContext from './MyContext';

function ProductDetail() {
  const { productDetail } = useContext(MyContext);

  return (
    <>
      <Navbar />
      <div className='detail-container'>
        {productDetail.map((item, i) => (
          <React.Fragment key={i}>
            <div className='detail-left'>
              <img src={item.img} alt={item.name} className='detail-img' />
            </div>
            <div className='detail-right'>
              <h3 className='detail-name'>{item.name}</h3>
              <h4>Brand: {item.brand}</h4>
              <h5>Category: {item.category}</h5>
              <h4>Old price: {item.oldPrice}</h4>
              <h2>Price: {item.price}</h2>
              <h3>Product description: {item.description}</h3>
              <h4>Available stock: {item.stock}</h4>
            </div>
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
