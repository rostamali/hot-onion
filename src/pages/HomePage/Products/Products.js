import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import Lunch from '../Category/Lunch/Lunch';
import Dinner from '../Category/Dinner/Dinner';
import Breakfast from '../Category/Breakfast/Breakfast';
import './Products.css';
import useProducts from '../../../hooks/useProducts';
import { useContext } from 'react';
import { AuthContext } from '../../../App';

const Products = () => {

    const {products} = useProducts();

    const breakFastProduct = products.filter(product => product.category.toLowerCase() === 'breakfast');
    const lunchProduct = products.filter(product => product.category.toLowerCase() === 'lunch');
    const dinnerProduct = products.filter(product => product.category.toLowerCase() === 'dinner');

    // handle cart
    const {CartData} = useContext(AuthContext);

    const {handleAddToCart} = CartData;


    return (
        <>
            <div id="filter-section">
                <Tabs defaultActiveKey="lunch" id="uncontrolled-tab-example" className="mb-5">
                <Tab eventKey="breakfast" title="Breakfast">
                    <div id="breakfast-section">
                        <div className="container">
                            <div className="breakfast-section-wrapper">                
                            {
                                breakFastProduct.map(product=><Breakfast 
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                                ></Breakfast>)
                            }
                            </div>
                        </div>
                    </div>
                    
                </Tab>
                <Tab eventKey="lunch" title="Lunch">
                    <div id="breakfast-section">
                        <div className="container">
                            <div className="lunch-section-wrapper">
                                {
                                    lunchProduct.map(product=><Lunch
                                    key={product.id}
                                    product={product}
                                    handleAddToCart={handleAddToCart}
                                    ></Lunch>)
                                }
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="dinner" title="Dinner">
                    <div id="dinner-section">
                        <div className="container">
                            <div className="dinner-section-wrapper">
                            {   
                                dinnerProduct.map(product=><Dinner
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                                ></Dinner>)  
                            }
                            </div>
                        </div>
                    </div>
                </Tab>
                </Tabs>
            </div>
        </>
    );
};

export default Products;