import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import { AuthContext } from '../../../App';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Cart.css';
import CartReview from '../../shared/CartReview/CartReview';
import Footer from '../../shared/Footer/Footer';

const Cart = () => {

    const {CartData} = useContext(AuthContext);
    const {cart, handleAddToCart, handleDecreaseQty} = CartData;

    return (
        <>
            <Header></Header>
            <div id="cart-section">
                <div className="container">

                    {
                        cart.length ? <div className="cart-section-wrapper">
                            <div className="cart-items-wrapper">
                                <div>
                                    <h3 className="checkout-page-title mb-xxl">Edit Shopping Cart</h3>
                                    <hr className="mb-xxl" />
                                </div>
                                {
                                    cart.map(cartItem=><ShoppingCart
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                    handleAddToCart={handleAddToCart}
                                    handleDecreaseQty={handleDecreaseQty}
                                    ></ShoppingCart>)
                                }
                            </div>
                            <div className="cart-review">
                                <h3 className="checkout-page-title mb-xxl">Order Review</h3>
                                <hr className="mb-xxl" />
                                <CartReview>
                                    <NavLink to="/checkout" className="checkout-btn">Procedd To Checkout</NavLink>
                                </CartReview>
                            </div>
                        </div>
                        :
                        <div><h1>Your Cart is Empty.</h1></div>
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Cart;