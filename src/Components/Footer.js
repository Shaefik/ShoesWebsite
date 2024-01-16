  import React from 'react'
  import './Footer.css'
  import { Link } from 'react-router-dom'

  function Footer() {
    return (
      <div className='footer-container'>
          <Link to='/all'  >All</Link>
            <Link to='/men' >Mens</Link>
            <Link to='/women' >Womens</Link>
            <Link to='/adidas' >Adidas</Link>
            <Link to='/puma' >Puma</Link>
            <Link to='/nike' >Nike</Link>
            <Link to='/crocs' >Crocs</Link>
            <Link to='/skechers' >Skechers</Link>
            <Link to='/newbalance' >New Balance</Link>
            <Link to='/fila' >Fila</Link>
      </div>
    )
  }

  export default Footer