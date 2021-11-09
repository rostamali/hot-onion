import React, { useContext } from 'react';
import './Breakfast.css';
import {AuthContext} from '../../../../App';
import { NavLink } from 'react-router-dom';

const Breakfast = (props) => {

    const {title, price, productURL, id} = props.product;
    const {CartData} = useContext(AuthContext);
    const {cart} = CartData;

    return (
        <div className="single-product-wrapper">
            <img src={productURL} alt={title} className="product-thumbnail" />
            <h3 className="product-title">{title}</h3>
            <p className="product-desc">Lorem ipsum dolor sit</p>
            <p className="product-price">${price}</p>
            <div className="overly">
                <div className="overly-btn-wrapper">
                    {
                        cart.find(pd=> pd.id === id) ? 
                        <NavLink to="/cart">
                            <button className="btn-overly btn-animation-1">
                                <ion-icon name="bag-handle-outline"></ion-icon>
                            </button>
                        </NavLink>
                        :
                        <button onClick={() => props.handleAddToCart(props.product)} className="btn-overly btn-animation-1"><ion-icon name="cart-outline"></ion-icon></button>
                    }
                    
                    <button onClick={() => props.handleWishList(props.product)} className="btn-overly btn-animation-2"><ion-icon name="heart-outline"></ion-icon></button>
                    <NavLink to={`/product/${id}`}>
                        <button className="btn-overly btn-animation-3"><ion-icon name="eye-outline"></ion-icon></button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Breakfast;