import React, { useContext } from 'react'
import MyContext from './MyContext'
import Navbar from './Navbar'
import { Nav } from 'react-bootstrap'

function Liked() {
    const {liked,setLiked} = useContext(MyContext)
  return (
    <div>
        <Navbar/>
        <>
         {liked.map((item)=>(
            <h1>{item.id}</h1>
         ))}
        </>

    </div>
  )
}

export default Liked