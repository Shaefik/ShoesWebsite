import React, { useContext,useEffect } from 'react'
import MyContext from './MyContext'

function AdminUser() {
    const {clientData} = useContext(MyContext)
    useEffect(() => {
        console.log('Updated clientData:', clientData);
      }, [clientData]);
  return (
    <div>
        <>
         {clientData.map((item)=>(
            <>
             <h2> id :{item.id}</h2>
             <h4>UserName: {item.user}</h4>
             <h4>email : {item.email}</h4>
             <h4>Password :{item.password}</h4>
             <hr></hr>
            </>

         ))}
        </>
    </div>
  )
}

export default AdminUser