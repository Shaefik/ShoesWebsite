 import { useState } from "react";
function InputField(){
    const [names,setNames] = useState([])
    const [editId,setEditId] = useState(null)

    const handleClick = () => {
        let id = document.getElementById('txtId').value;
        let name = document.getElementById('txtName').value;
        let price = document.getElementById('txtPhone').value;
        let qty = document.getElementById('txtCount').value;
        let total = parseInt(price) * parseInt(qty);
    
        const itemToCheck = { id: id };
        const itemExists = names.some((item) => item.id === itemToCheck.id);
        if (itemExists) {
        } else {
          setNames((current) => [...current, { id, name, price, qty, total }]);
        }
      };    
  const handlepop =()=>{
    let newArr = [...names]
    newArr.pop()
    setNames(newArr)

  }
  const handleRemoveByIndex =(index)=>{
    const updatedData = names.filter((item)=> item.id !== index)
    setNames(updatedData)

  }
  const handleEdit =(id)=>{
     setEditId(id)
  }
  const handleUpdate = (id)=>{
    let newName = document.getElementById(`name_${id}`).value
    let newPrice = document.getElementById(`price_${id}`).value
    let newQty = document.getElementById(`qty_${id}`).value
    let newTotal = parseInt(newPrice) * parseInt(newQty)
    const updatedData = names.map((item)=>
      item.id === id  ? {...item, name :newName, price:newPrice, qty: newQty, total: newTotal   } : item
    )
    setNames(updatedData)
    setEditId(null)


  }
    


    return(
        <div>
            <div>
      <div >
                <button  
                    type="button">Total Cart Items:  {names.length}
                </button>
                <br />
            </div>
        <br />
        <br/>
    
    Enter Id
    <br/>
    <input type='text' id="txtId"/>
    <br/>

    Enter Name
    <br/>
    <input type='text' id="txtName"/>
    <br/>
    <br/>
    Enter Price
    <br/>
    <input type='number' id="txtPhone"/>
    <br/>
    <br/>
    Enter Quantity
    <br/>
   
    <input type='number' id="txtCount"/>
    <br/>

    <br/>
    <button onClick={handleClick} class="add" >
      Add
    </button>
    <p>    </p>
    <button onClick={handlepop} class="remove" >
      Remove
    </button>
    <br/> <br/> <br/>
      </div>

      <div className="container">
      
        <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th  scope="col">NAME</th>
                <th  scope="col">PRICE</th>
                <th  scope="col">QUANTITY</th>
                <th  scope="col">TOTAL</th>
                <th  scope="col">ACTIONS</th>
            </tr>
        </thead>
        
        <tbody >
          {names.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              {editId === item.id ? (
                <>
                  <td>
                    <input type="text" id={`name_${item.id}`}   />
                  </td>
                  <td>
                    <input type="number" id={`price_${item.id}`}   />
                  </td>
                  <td>
                    <input type="number" id={`qty_${item.id}`}   />
                  </td>
                  <td>{item.total}</td>
                  <td  onClick={()=>handleUpdate(item.id)}>
                    Update
                  </td>
                </>
              ):(
                <>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                  <td>{item.total}</td>
                  <td>
                    <label onClick={()=>handleEdit(item.id)} >Edit</label>
                  </td>
                  <td>
                    <label onClick={()=>handleRemoveByIndex(item.id)} >Delete</label>
                  </td>


                </>

              )}
               

            </tr>
          ))}




           {names.map((item)=>(
             <>
               <tr key={item.id}>
                 <td>{item.id}</td>
                 <td>{item.name}</td>
                 <td>{item.price}</td>
                 <td>{item.qty}</td>
                 <td>{item.total}</td>
               </tr>
             </>
           ))}
           
        </tbody>
        </table>
           
</div>
        </div>
    )
}
export default InputField;