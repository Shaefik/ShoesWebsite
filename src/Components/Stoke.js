import { useContext } from "react"
import MyContext from "./MyContext"

export default function Stoke(){

    const {stock,setStock}=useContext(MyContext)

    console.log("stoke page:", stock);
    return(
        <>
        <h1>Stoke</h1>
        </>
    )
}