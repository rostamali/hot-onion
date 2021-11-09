import React, { useContext } from 'react';
import {AuthContext} from '../../../App';
import './CartReview.css';

const CartReview = (props) => {

    const {CartData} = useContext(AuthContext);
    const {cartCount, cartTotal} = CartData;

    return (
        <>
            <div id="cart-review-section">
                <div className="cart-details-info">
                    <div className="cart-info-group">
                        <h5 className="cart-info-items cart-text">Items</h5>
                        <p className="cart-total-product cart-text">{cartCount}</p>
                    </div>
                    <div className="cart-info-group">
                        <h5 className="cart-info-subtotal cart-text">Subtotal</h5>
                        {/* <p className="cart-subtotal cart-text">${subTotal.toFixed(2)}</p> */}
                    </div>
                    {/* <div className="cart-info-group">
                        <h5 className="cart-info-tax cart-text">Tax</h5>
                        <p className="cart-total-tax cart-text">${cartTax}</p>
                    </div> */}
                    <div className="cart-info-group">
                        <h5 className="cart-info-delivery cart-text">Delivery fee</h5>
                        <p className="cart-total-delivery-fee cart-text">$0</p>
                    </div>
                    <div className="cart-info-group">
                        <h5 className="cart-total">Total</h5>
                        <p className="cart-total-price">${cartTotal.toFixed(2)}</p>
                    </div>
                </div>
                <div className="place-order-btn-wrapper">
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default CartReview;