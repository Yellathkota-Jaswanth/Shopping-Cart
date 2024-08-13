
import { useState } from "react"
import Cart from "./Components/Cart"
import Navbar from "./Components/Navbar"
import cartContext from "./Utilities/cartContext"

function App(){
  const [cartUseCxt,setCartUseCxt]=useState(0)
  return(
    <cartContext.Provider value={[cartUseCxt,setCartUseCxt]}>
        <Navbar/>


    <div className="heading">
    <h1 style={{textAlign:'center'}}>Shopping in style</h1>
    <h3 style={{textAlign:'center'}}>With this shop homepage template</h3>
    </div>


    


    <div className="App">

    <Cart/>

    


    </div>

    


    

    </cartContext.Provider>
  )
}
export default App