import React from 'react';

const SignUp = () => {



    return (
        <>
            <div id="form-section">
                <div className="form-wrapper">
                    <div className="form-container">
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
                            <div className="form-input-group">
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                            <div className="form-btn-group">
                                <input type="submit" value="Sign up" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;