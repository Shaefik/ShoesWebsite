import "./Header.css"
import {useState} from 'react'
 function Header(){
    const [show,setShow] = useState("")
    function btn(){
        setShow('I am header component')
    }

    return(
        <div>
            <h2>Header</h2>

            <h2>hello : {show}</h2>
           
             <button onClick={btn}  >Click</button>
        </div>
    )
}
export default Header;