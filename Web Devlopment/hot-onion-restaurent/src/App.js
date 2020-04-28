import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Breakfast from './components/Breakfast/Breakfast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodDetails from './components/FoodDetails/FoodDetails';
import NotFound from './components/NotFound/NotFound';
import Lunch from './components/Lunch/Lunch';
import Attract from './components/Attract/Attract';
import SignIn from './components/SignIn/SignIn';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/breakfast">
          <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
          <Breakfast></Breakfast>
          </Route>
          <Route path="/dinner">
          <Breakfast></Breakfast>
          </Route>
          <Route path="/orderReview">
          <OrderReview></OrderReview>
          </Route>
          <Router path="/signIn">
            <SignIn></SignIn>
          </Router>
          <Route exact path="/">
          <Lunch></Lunch>
          </Route>
          <Route path="/food/:foodId">
            <FoodDetails></FoodDetails>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Attract></Attract>
      </Router>
 
    </div>
  );
}

export default App;
