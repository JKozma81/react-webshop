import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Products';

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
            {/* <Route
              path="/blog/:id"
              component={(routProps) => (
                <PostDetail postId={routProps.match.params.id} />
              )}
            ></Route> */}
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
