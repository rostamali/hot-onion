import React from 'react';
import './Breakfast.css';

const Breakfast = (props) => {

    const {title, price, productURL} = props.product;

    return (
        <div className="single-product-wrapper">
            <img src={productURL} alt={title} className="product-thumbnail" />
            <h3 className="product-title">{title}</h3>
            <p className="product-desc">Lorem ipsum dolor sit</p>
            <p className="product-price">${price}</p>
            <div className="overly">
                <div className="overly-btn-wrapper">
                    <button onClick={() => props.handleAddToCart(props.product)} className="btn-overly btn-animation-1"><ion-icon name="cart-outline"></ion-icon></button>
                    <button className="btn-overly btn-animation-2"><ion-icon name="heart-outline"></ion-icon></button>
                    <button className="btn-overly btn-animation-3"><ion-icon name="eye-outline"></ion-icon></button>
                </div>
            </div>
        </div>
    );
};

export default Breakfast;