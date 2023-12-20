import React from 'react'
import './Category.css'
import { productData } from '../Assets/productData'

function Category({onSizeClick,selectedSize}) {
  return (
    <div className='category'>
      <div className='category-left' >
        <h2>Men's</h2>
        <hr></hr>
        <div className='checkbox'>
          <h4>Price</h4>
            
            <div>
              <input type='checkbox' id ='value1' />
              <label>Rs.1000 to Rs.2000</label>
              
            </div>
            <div>
              <input type='checkbox' id ='value2' />
              <label>Rs.2000 to Rs.3000</label>
              
            </div>
            <div>
              <input type='checkbox' id ='value3' />
              <label>Rs.3000 to Rs.4000</label>
              
            </div>
            <div>
              <input type='checkbox' id ='value4' />
              <label>Rs.4000 to Rs.5000</label>
              
            </div>
        </div>
        <hr></hr>
        <h4 className='head-size'> Size</h4>
        

       

        
        <div className='size-boxes'>
        <div className='size-box-5'>
        <button
            onClick={() => onSizeClick(5)}
            className={selectedSize === 5 ? 'selected-size' : ''}
          >
            5
          </button>          </div>

          <div className='size-box-6'>
          <button
            onClick={() => onSizeClick(6)}
            className={selectedSize === 6 ? 'selected-size' : ''}
          >
            6
          </button>          </div>
          <div className='size-box-7'>
          <button
            onClick={() => onSizeClick(7)}
            className={selectedSize === 7 ? 'selected-size' : ''}
          >
            7
          </button>          </div>
          <div className='size-box-8'>
          <button
            onClick={() => onSizeClick(8)}
            className={selectedSize === 8 ? 'selected-size' : ''}
          >
            8
          </button>          </div>
          <div className='size-box-9'>
          <button
            onClick={() => onSizeClick(9)}
            className={selectedSize === 9 ? 'selected-size' : ''}
          >
            9
          </button>          </div>
          

        </div>
        <hr></hr>
       
        
      </div>
      
      <div className='category-right'>
      
        
         

      </div>
      
    </div>
  )
}

export default Category