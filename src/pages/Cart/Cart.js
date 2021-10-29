import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import { AuthContext } from '../../components/MainSection/MainSection';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import './Cart.css';

const Cart = () => {

    const {cart, handleAddToCart, handleDecreaseQty} = useContext(AuthContext);

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
                                {/* info */}
                                {/* <CartReview>
                                    <NavLink to="/checkout" className="checkout-btn">Procedd To Checkout</NavLink>
                                </CartReview> */}
                            </div>
                        </div>
                        :
                        <div><h1>Your Cart is Empty.</h1></div>
                    }

                </div>
            </div>
        </>
    );
};

export default Cart;