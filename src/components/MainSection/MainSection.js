import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from '../../pages/Cart/Cart';
import Home from '../../pages/Home/Home';
import SignInSignUp from '../../pages/SignInSignUp/SignInSignUp';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

export const AuthContext = createContext();

const MainSection = () => {


    // handle add to cart
    const [cart, setCart] = useState([]);
    const handleAddToCart = (cartProduct) =>{
        const exist = cart.find(product=> product.id === cartProduct.id);
        let newCartItems = [];
        if(!exist){
            cartProduct['qty'] = 1;
            newCartItems = [...cart, cartProduct];
            
        }else{
            cartProduct['qty'] = cartProduct['qty'] + 1;
            newCartItems = [...cart];
        }
        setCart(newCartItems);
    }

    // decrease cart qty
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

    // handle wishlist
    const [wishList, setWishList] = useState([]);
    const handleWishList = (wishListProduct) =>{
        const exist = wishList.find(product=> product.id === wishListProduct.id);
        let newWishList = 0;
        if(!exist){
            wishListProduct['qty'] = 1;
            newWishList = [...wishList, wishListProduct];
            setWishList(newWishList);
        }
    }

    // remove from the cart items
    const handleCartItem = (removeItem) =>{

        const getProductIndex = cart.indexOf(removeItem);

        cart.splice(getProductIndex, 1);
        const getNewCartAfterRemove = [...cart];
        setCart(getNewCartAfterRemove);
    }
    

    return (
        <AuthContext.Provider value={{handleAddToCart, cart, handleWishList, wishList, handleDecreaseQty, handleCartItem}}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/cart">
                        <Cart></Cart>
                    </Route>
                    <Route path="/checkout">
                        <ShoppingCart></ShoppingCart>
                    </Route>
                    <Route path="/SignInSignUp">
                        <SignInSignUp></SignInSignUp>
                    </Route>
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
};

export default MainSection;