import React, { useContext } from 'react'
import MyContext from '../MyContext'

function LikedProducts() {
   const{liked}=useContext(MyContext)
  return (
    <div>
   <h2>Liked Products</h2>

    <div >
       
        
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>

            </thead>
            <tbody>
                {liked.map((item,index)=>(
                    <tr key={index}>
                     <td>{item.name}</td>
                    <td>{item.price}</td>
                    </tr>
                   
                ))}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default LikedProducts