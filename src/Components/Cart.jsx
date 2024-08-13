import { useContext } from "react"
import Add from "./add"
import cartContext from "../Utilities/cartContext"


function Cart(){
    const cartValue=useContext(cartContext)
    let count=[]

    return(

        <>

        <div className="border">
            <img src="public/images/images/airpods.jpg" alt="" width="350px"/>
            <h3>Airpodes</h3>
            <h5>Description:Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working</h5>
            <button onClick={(e) => e.target.textContent = e.target.textContent.trim() === 'Add to Cart' ? 'Remove from Cart' : 'Add to Cart'}>Add to Cart</button>

        </div>


        <div className="border">
            <img src="public/images/images/camera.jpg" alt="" width="350px"/>
            <h3>Camera</h3>
            <h5>Description:Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design
            </h5>
            <button onClick={(e) => e.target.textContent = e.target.textContent.trim() === 'Add to Cart' ? 'Remove from Cart' : 'Add to Cart'}>Add to Cart</button>


        </div>

        <div className="border">
            <img src="public/images/images/phone.jpg" alt="" width="350px"/>
            <h3>Phone</h3>
            <h5>Description:Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life</h5>
            <button onClick={(e) => e.target.textContent = e.target.textContent.trim() === 'Add to Cart' ? 'Remove from Cart' : 'Add to Cart'}>Add to Cart</button>

        </div>

        <div className="border">
            <img src="public/images/images/playstation.jpg" alt="" width="350px"/>
            <h3>Playstation</h3>
            <h5>Description:The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music</h5>
            <button onClick={(e) => e.target.textContent = e.target.textContent.trim() === 'Add to Cart' ? 'Remove from Cart' : 'Add to Cart'}>Add to Cart</button>

        </div>

        <div className="border">
            <img src="public/images/images/mouse.jpg" alt="" width="350px"/>
            <h3>Mouse</h3>
            <h5>Description:Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience</h5>
            <button onClick={(e) => e.target.textContent = e.target.textContent.trim() === 'Add to Cart' ? 'Remove from Cart' : 'Add to Cart'}>Add to Cart</button>
        </div>

        <Add/>



        
       
        
        </>
    )
}

export default Cart

