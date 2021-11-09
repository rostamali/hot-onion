import React from 'react';
import './ProductDetails.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ProductDetails = () => {

    function NextNavButton(props) {
        const {onClick} = props;
        return (
            <button className="slick-arrow res-slick-next"
            onClick={onClick}><ion-icon name="chevron-forward"></ion-icon></button>
        );
    }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextNavButton/>
    };

    return (
        <div id="single-product-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="single-product-info">
                            <h2 className="single-product-title">Light Breakfast</h2>
                            <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, fuga. Itaque veniam rem incidunt sunt soluta laboriosam aliquam quis. Esse Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, fuga. Itaque veniam rem incidunt sunt soluta laboriosam aliquam quis. Esse</p>
                            <div className="single-product-action">
                                <h3 className="single-product-price">$55</h3>
                                <button className="btn-single-add-to-cart"><ion-icon name="cart-outline"></ion-icon> Add To Cart</button>
                            </div>
                        </div>
                        <div id="related-product-slider">
                            <Slider {...settings}>
                                <div>
                                    <img src="	https://i.ibb.co/0ZfdfVm/lunch3.png" alt="" className="product-thumbnail" />
                                </div>
                                <div>
                                    <img src="	https://i.ibb.co/0ZfdfVm/lunch3.png" alt="" className="product-thumbnail" />
                                </div>
                                <div>
                                    <img src="	https://i.ibb.co/0ZfdfVm/lunch3.png" alt="" className="product-thumbnail" />
                                </div>
                                <div>
                                    <img src="	https://i.ibb.co/0ZfdfVm/lunch3.png" alt="" className="product-thumbnail" />
                                </div>
                                <div>
                                    <img src="	https://i.ibb.co/0ZfdfVm/lunch3.png" alt="" className="product-thumbnail" />
                                </div>
                                <div>
                                    <img src="	https://i.ibb.co/0ZfdfVm/lunch3.png" alt="" className="product-thumbnail" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="single-product-thumbnail text-md-end text-center">
                            <img src="https://i.ibb.co/Smc5WKr/lunch1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;