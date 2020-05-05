import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// stylesheets
import './App.css';

// components
import HomePage from './pages/homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact/>
      </div>
    </Router>
  );
}

export default App;
