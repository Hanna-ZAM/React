import React from 'react';
import Page from './components/page';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';

const App = () => {
  return (
    <Router>
      <Header />
      <Page />
    </Router>
  );
};

export default App;
