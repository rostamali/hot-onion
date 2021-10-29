import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../images/logo2.png';
import { AuthContext } from '../MainSection/MainSection';
import './Header.css';

const Header = () => {

    const {cart, wishList} = useContext(AuthContext);
    // cart counter
    let cartCounter = 0;
    for(const cartItem of cart){
        cartCounter = cartItem['qty'] + cartCounter;
    }

    // wishlist
    let wishListCounter = 0;
    for(const wishListItem of wishList){
        wishListCounter = wishListItem['qty'] + wishListCounter;
    }

    return (
        <>
            <div id="header-section">
                <Navbar expand="sm" id="my-navbar" className='nav-sticky'>
                    <Container>
                        <NavLink to="/">
                            <img src={headerLogo} alt="Logo" className="navbar-logo" />
                        </NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <NavLink to="/home" className="menu-link">
                                <span className="heart-icon">
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <span className="wishlist-count">{wishListCounter}</span>
                                </span>
                            </NavLink>
                            <NavLink to="/cart" className="menu-link">
                                <span className="cart-icon">
                                    <ion-icon name="cart-outline" ></ion-icon>
                                    <span className="cart-count">{cartCounter}</span>
                                </span>
                            </NavLink>
                            <NavLink to="/SignInSignUp" className="menu-link">Login</NavLink>
                            <NavLink to="/SignInSignUp" className="menu-link sign-up">
                                <ion-icon name="log-out-outline"></ion-icon>Sign up
                            </NavLink>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div> 
        </>
    );
};

export default Header;