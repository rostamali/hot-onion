import React, { useContext } from 'react';
import { AuthContext } from '../MainSection/MainSection';
import './ShoppingCart.css';

const ShoppingCart = (props) => {

    const {handleCartItem} = useContext(AuthContext);
    const {title, price, productURL, category, qty} = props.cartItem;
    const cartItemTotalPrice = price * qty;

    return (
        <>
            <div className="cart-items">
                <div className="cart-items-list">
                    <div className="cart-item-remove-btn">
                        <button onClick={()=>handleCartItem(props.cartItem)}>
                            <ion-icon name="close"></ion-icon>
                        </button>
                    </div>
                    <div className="cart-item-details">
                        <div className="cart-item-thumbnail">
                            <img src={productURL} alt={title} />
                        </div>
                        <div className="cart-item-info">
                            <h3 className="order-product-title">{title}</h3>
                            <p className="product-category">{category}</p>
                        </div>
                    </div>
                    <div className="cart-item-price">
                        <h4 className="order-product-price">${price}</h4>
                    </div>
                    <div className="cart-item-quantity">
                        <div className="order-quantity-details">
                            <button onClick={()=>props.handleDecreaseQty(props.cartItem)} className="btn-minus">-</button>
                            <span className="product-quantity-value">{qty}</span>
                            <button onClick={()=>props.handleAddToCart(props.cartItem)} className="btn-plus">+</button>
                        </div>
                    </div>
                    <div className="cart-item-total-price">
                        <h4 className="order-product-price">${cartItemTotalPrice.toFixed(2)}</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;