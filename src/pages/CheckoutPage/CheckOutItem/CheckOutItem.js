import React, { useContext } from 'react';
import { AuthContext } from '../../../App';
import './CheckOutItem.css';

const CheckOutItem = (props) => {

    const {title, productURL, price, qty} = props.product;
    const cartItemTotalPrice = price * qty;
    const {CartData} = useContext(AuthContext);
    const {handleAddToCart, handleDecreaseQty} = CartData;

    return (
        <>
            <div id="cart-items-section">
                <div className="order-items">
                    <div className="order-list">
                        <div className="order-product-thumbnail">
                            <img src={productURL} alt="" />
                        </div>
                        <div className="order-product-info">
                            <h3 className="order-product-title">{title}</h3>
                            <h4 className="order-product-price">${cartItemTotalPrice.toFixed(2)}</h4>
                        </div>
                        <div className="order-quantity-details">
                            <button onClick={() => handleDecreaseQty(props.product)} className="btn-minus">-</button>
                            <span className="product-quantity-value">{qty}</span>
                            <button onClick={() => handleAddToCart(props.product)} className="btn-plus">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOutItem;