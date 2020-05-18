import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch //will ensure that only one Route will be actioned
} from 'react-router-dom';

// stylesheets
import './App.css';

// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

// components
import NavBar from './navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} exact/>
            <Route path="/article-list" component={ArticleListPage} exact/>
            <Route path="/article/:name" component={ArticlePage} exact/>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
