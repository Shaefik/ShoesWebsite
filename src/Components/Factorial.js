 import { useState } from "react"
 import './factorial.css'
 function Factorial(){
   const[no,setNo]=useState(0)

    const [fact,setFact] = useState(0)

    function enter(){
     
        let fact= 1
       for(let i = 1 ; i<=no;i++){
         if (no>0){ 
         fact *= i;
         }
         else{
            fact=0;
         }
       }
        setFact(fact)
        
    }
 return(
    
    
    <div class= "fact-container">
        <h1>Factorial</h1>
        <input onChange={(e)=> setNo(e.target.value)} value={no} type="number" placeholder="Enter a value"  />
        <button class='fact-button' onClick={enter}>Enter</button>
        <h2>{fact}</h2>

    </div>
 )
}
export default  Factorial

