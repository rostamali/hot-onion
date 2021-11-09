const { useState } = require("react")

const useCart = () =>{

    const [cart, setCart] = useState([]);

    // handle add to cart
    const handleAddToCart = product =>{

        const exist = cart.find(pd=> pd.id === product.id);
        let newOrderItems = [];
        if(!exist){
            product['qty'] = 1;
            newOrderItems = [...cart,product];
            
        }else{
            product['qty'] = product['qty'] + 1;
            newOrderItems = [...cart];
        }
        setCart(newOrderItems);
    }

    // decrease Cart QTY
    const handleDecreaseQty = (decreaseQty) =>{

        if(decreaseQty.qty >= 1){

            decreaseQty['qty'] = decreaseQty['qty'] - 1;
            
            if(decreaseQty.qty === 0){
                decreaseQty['qty'] = 0;
                const decreaseCartQty = [...cart];
                setCart(decreaseCartQty)
            }else{
                const decreaseCartQty = [...cart];
                setCart(decreaseCartQty)
            }
        }
    }

    // delete single product from cart
    const handleCartItem = (product) =>{
        const remainingProduct = cart.filter(pd=> pd.id !== product.id);
        setCart(remainingProduct);

    }
    
    // cart counter
    let cartCount = 0;
    let cartTotal = 0;
    for(const cartItem of cart){
        cartCount = cartItem.qty + cartCount;
        cartTotal = ( cartItem.price * cartItem.qty ) +cartTotal;
    }

    return {
        setCart,
        cart,
        handleAddToCart,
        cartCount,
        handleDecreaseQty,
        handleCartItem,
        cartTotal
    }
}
export default useCart;