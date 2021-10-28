import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignInSignUp.css';
import { NavLink } from 'react-router-dom';
import brandLogo from '../../images/logo2.png';


const SignInSignUp = () => {


    return (
        <>
            <div id="signin-signup-section">
                <div className="form-heade mb-5">
                    <NavLink to="/"><img src={brandLogo} alt="Logo" className="form-logo" /></NavLink>
                </div>
                <Tabs defaultActiveKey="signin" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="signin" title="Sign in">
                        <SignIn></SignIn>
                    </Tab>
                    <Tab eventKey="profile" title="Sign up">
                        <SignUp></SignUp>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};

export default SignInSignUp;