import React from 'react';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import {Router, Link} from '@reach/router'
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Router>
        <Main path="/"/>
        <Detail path="products/:id"/>
        <Update path="products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
