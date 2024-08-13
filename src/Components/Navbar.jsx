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

    const cartValue=useContext(cartContext)

    return(
        <>
        
        <div style={navStyle}>
            <div>Home</div>
            <div><button>Cart{cartValue}</button></div>
        </div>
        
        </>
    )
}

export default Navbar
