import React from 'react';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import {Router, Link} from '@reach/router'
import ProdForm from './components/ProdForm';
function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Router>
        <Main path="/"/>
        <Detail path="products/:id"/>
        <ProdForm path="products/:id/edit" action="edit"/>
      </Router>
    </div>
  );
}

export default App;
