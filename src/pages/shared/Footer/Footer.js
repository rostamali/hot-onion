import React from 'react';
import { NavLink } from 'react-router-dom';
import footerLogo from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {


    return (
        <div id="footer-section">
            <div className="container">
                <div className="footer-header text-center">
                    <NavLink to="/">
                        <img src={footerLogo} alt="Hot Onion" className="footer-thumbnail" />
                    </NavLink>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 text-md-start text-center">
                        <p className="copy-right-text">Copyright &copy; 2021 All Right Reserved by Rostam</p>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="footer-menu text-md-end text-center">
                            <NavLink to="/" className="footer-menu-link">Privacy Policy</NavLink>
                            <NavLink to="/" className="footer-menu-link">Terms of Use</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;