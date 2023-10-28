import { useState } from "react"


function Counter(){
    const [count,setCount] = useState(0)
    function inc(){
        setCount(count + 1)
    }
    function dec(){
        if(count === 0){
            setCount(0)
        }else{
            setCount(count - 1 )


        }
        
        
    }
    function res(){
        setCount(0)
    }
    return(

        <div>
            <button class="incButton" onClick={inc}>Increment</button>
            <h3 class="outpur" >{count}</h3>
            <button class="decButton" onClick={dec} >Decrement</button>
            <button class="reset" onClick={res}>Res</button>

        </div>
    )
}
export default Counter