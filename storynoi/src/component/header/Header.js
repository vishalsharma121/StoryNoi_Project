import React from 'react';
import '../header/Header.css';
import LogoImage from '../Images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="outer">
      <div className="container">
        <div className="inner">
          <div className="left-logo">
            <Link to='/'>
              <img src={LogoImage} alt="Logo" />
            </Link>
          </div>
          <div className="navigation">
            <ul>
              <li>
                <Link to='/about-us'>About Us</Link>
              </li>
              <li>
                <Link to='/why-storynoi'>Why StoryNoi</Link>
              </li>
              <li>
                <Link to='/idea'>Idea</Link>
              </li>
              <li>
                <Link to='/login'>Log In</Link>
              </li>
            </ul>
          </div>
          <div className="navigation-toggle-button">
            <a href="#">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
