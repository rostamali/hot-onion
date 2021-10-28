import { useEffect, useState } from "react";

const useCart = () =>{

    const [cart, setCart] = useState([]);

    useEffect(()=>{
        console.log(cart);
    },[cart])

    return{
        cart,
        setCart
    }
}

export default useCart;