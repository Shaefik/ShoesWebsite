 import { useState } from "react"
 function Factorial(){
   const[no,setNo]=useState(0)

    const [fact,setFact] = useState(0)

    function enter(){
     
        let fact= 1
       for(let i = 1 ; i<=no;i++){
          fact *= i;
       }
        setFact(fact)
        
    }
 return(
    
    
    <div class= "container">
        <h3>Factorial</h3>
        <input onChange={(e)=> setNo(e.target.value)} value={no} type="number" placeholder="Enter a value"  />
        <button onClick={enter}>Enter</button>
        <h2>{fact}</h2>

    </div>
 )
}
export default  Factorial

