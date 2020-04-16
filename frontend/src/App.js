import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="site-content">
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route
              path="/products/:id"
              component={(routProps) => (
                <ProductDetail productId={routProps.match.params.id} />
              )}
            ></Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/orders">Orders</Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
