import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
        <>
            <div id="form-section">
                <div className="form-wrapper">
                    <div className="form-container">
                        <div className="social-login">
                            <div className="social-login-wrapper">
                                {/* onClick={handleSignInWithGoogle}  */}
                                <button className="social-login-icon">
                                    <ion-icon name="logo-google"></ion-icon>
                                </button>
                                <button className="social-login-icon">
                                    <ion-icon name="logo-github"></ion-icon>
                                </button>
                            </div>
                        </div>
                        <form className="form">
                            <div className="form-input-group">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="form-input-group">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="form-input-group">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="form-btn-group">
                                <input type="submit" value="Sign in" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;