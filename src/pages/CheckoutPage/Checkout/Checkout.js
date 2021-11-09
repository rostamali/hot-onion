import React, { useContext } from 'react';
import CartReview from '../../shared/CartReview/CartReview';
import Header from '../../shared/Header/Header';
import { AuthContext } from '../../../App';
import './Checkout.css';
import CheckOutItem from '../CheckOutItem/CheckOutItem';
import Footer from '../../shared/Footer/Footer';

const Checkout = () => {

    const {CartData} = useContext(AuthContext);
    const {cart} = CartData;

    return (
        <>
            <Header></Header>
            <div id="checkout-section">
                <div className="container">
                    <div className="checkout-inner-section">
                        <div id="checkout-form-section">
                            <div className="form-wrapper">
                                <div className="form-container">
                                    <div className="form-header">
                                        <div className="form-input-group">
                                            <h3 className="checkout-page-title">Edit Delivery Details</h3>
                                            <hr />
                                        </div>
                                    </div>
                                    <form className="checkout-form">
                                        <div className="form-input-group">
                                            <input type="text" value="Deliver to door" />
                                        </div>
                                        <div className="form-input-group">
                                            <input type="text" placeholder="Rd No" />
                                        </div>
                                        <div className="form-input-group">
                                            <input type="text" placeholder="Flat/floor no" />
                                        </div>
                                        <div className="form-input-group">
                                            <input type="text" placeholder="Business name" />
                                        </div>
                                        <div className="form-input-group">
                                            <textarea placeholder="Delivery addition note"></textarea>
                                        </div>
                                        <div className="form-btn-group">
                                            <input type="submit" value="Save & Continue" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="checkout-order-review">
                            <div className="order-review-header">
                                <h3 className="checkout-page-title">Order Review</h3>
                                <hr />
                            </div>
                            <div className="order-items-wrapper">
                                
                                {   
                                    cart.length ?
                                    cart.map(product=><CheckOutItem
                                        key={product.id}
                                        product={product}
                                    ></CheckOutItem>)
                                    :
                                    ''
                                }
                                
                            </div>
                            <div className="cart-details">
                                <CartReview>
                                    <button className="place-older-btn">Place Order</button>
                                </CartReview>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Checkout;