import React from "react";
import { useState } from 'react'
import Page  from './components/page'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header'
import { ProductType } from "product";
import productsList from "../src/product";

class App extends React.Component{
 /* constructor() {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem('state') as string) || {
      searchValue: ''
    }
  }
  setState(state:stateType) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }*/
  render() {
    console.log(this.state)  
    return (
    <Router>
      <Header />
      <Page />
    </Router>
    )
  }
}



export default App
