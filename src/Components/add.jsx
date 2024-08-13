import { useState } from "react"
import Navbar from "./Navbar"
function Add(){
    const[add,setadd]=useState(0)
    const[remove,setremove]=useState(0)

    return(
        <>
        
        
        <button onClick={()=>{
            setadd(add+1)
        }}>Cart{add}</button>
         <button onClick={()=>{
            setremove(remove-1)
        }}>Cart{remove}</button>
        </>
    )
}
export default Add