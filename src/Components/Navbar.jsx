import { useContext } from "react"
import cartContext from "../Utilities/cartContext"

const Navbar=()=>{
    const navStyle={
        display:"flex",
        justifyContent:"flex-end",
        backgroundColor:"beige",
        gap:"10px",
        padding:"2px",
        color:"orange"
        

    }

    //const cartValue=useContext(cartContext)
    const {cartUseCxt}=useContext(cartContext)
    //console.log(cartValue)

    


    return(
        <>
        
        <div style={navStyle}>
            <div>Home</div>
            <div><button>cart{cartUseCxt && cartUseCxt.length}</button></div> 
        </div>
        
        </>
    )
}

export default Navbar