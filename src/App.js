import './App.css';
import React, { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/CartPage/Cart/Cart';
import Checkout from './pages/CheckoutPage/Checkout/Checkout';
import Home from './pages/HomePage/Home/Home';
import SignInSignUp from './pages/LoginPage/SignInSignUp/SignInSignUp';
import useCart from './hooks/useCart';
import SingleProduct from './pages/SingleProductPage/SingleProduct/SingleProduct';
export const AuthContext = createContext();

const App = () => {

    const CartData = useCart();

  return (
    <>
      <AuthContext.Provider value={{CartData}}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/cart">
                        <Cart></Cart>
                    </Route>
                    <Route path="/checkout">
                        <Checkout></Checkout>
                    </Route>
                    <Route path="/SignInSignUp">
                        <SignInSignUp></SignInSignUp>
                    </Route>
                    <Route path="/product/:productId">
                        <SingleProduct></SingleProduct>
                    </Route>
                </Switch>
            </Router>
        </AuthContext.Provider>
    </>
  );
};

export default App;