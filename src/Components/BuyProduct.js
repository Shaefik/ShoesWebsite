import React from 'react'
import './BuyProduct.css'
import { Link } from 'react-router-dom'

function BuyProduct() {
  function proceed(){
    alert('Success')
  }
  return (
    <div className='buy-container'>
      <input placeholder='Address' ></input>
      <input placeholder='LandMark' ></input>
      <input placeholder='PinCode'/>
     <Link to='/all'> <button className='proceed' onClick={proceed}>Proceed</button></Link>

    </div>
  )
}

export default BuyProduct