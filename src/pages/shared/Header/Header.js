import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../../images/logo2.png';
import './Header.css';
import {AuthContext} from '../../../App';

const Header = () => {

    const {CartData} = useContext(AuthContext);
    const {cartCount} = CartData;

    // sticky navbar
    const [sticky, setSticky] = useState(false);
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 50){
            setSticky(true);
        }else{
            setSticky(false);
        }
    })

    return (
        <>
            <div id="header-section">
                <Navbar expand="sm" id="my-navbar" className={sticky ? "nav-sticky" : ''}>
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
                                    {/* <span className="wishlist-count">{wishListCounter}</span> */}
                                </span>
                            </NavLink>
                            <NavLink to="/cart" className="menu-link">
                                <span className="cart-icon">
                                    <ion-icon name="bag-handle-outline"></ion-icon>
                                    <span className="cart-count">{cartCount}</span>
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