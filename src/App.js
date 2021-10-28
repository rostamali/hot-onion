import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';

const App = () => {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/SignInSignUp">
              <SignInSignUp></SignInSignUp>
            </Route>
          </Switch>
        </Router>
    </div>
  );
};

export default App;