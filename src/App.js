import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productlist';
import Cart from './components/cart/cart';
import Details from './components/details';
import Default from './components/default';
import Modal from './components/modal';


class App extends Component {
  
  render() {
    return(
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/cart' component={Cart}/>
          <Route path='/details' component={Details} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
export default App;

