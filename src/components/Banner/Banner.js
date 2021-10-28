import React from 'react';
import './Banner.css';

const Banner = () => {

    return (
        <>
            <div id="banner-section">
                <div className="her-text-box">
                    <h1 className="banner-title">Best food waiting for your belly</h1>
                    <div className="banner-search-form-wrapper">
                        <div className="banner-search-input-group">
                            <input type="text" className="search-form" />
                            <div className="search-btn-wrapper">
                                <button className="btn-regular">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;