import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/App.css';

import home from '../pages/home.jsx';
class App extends Component {
  render() { 
    return (
      <Router>
        <div>
          <Route exact path="/" component={home}/>
        </div>
      </Router>
    );
  }
}

export default App;
