import React from "react";
import '../App.css'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <header className='header'>
        <nav>
          <ul className='header-list'>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/page404">404</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
