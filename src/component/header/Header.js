import React from 'react';
import '../header/Header.css';
import LogoImage from '../images/logo.png';

function Header() {
return (
  <header className="outer">
    <div className="container">
      <div className="inner">
        <div className="left-logo">
            <img src={LogoImage} alt="Logo" />
        </div>
        <div className="navigation">
          <ul>
          <li><a>About Us</a></li>                                    
        <li><a>Why StoryNoi</a></li>
        <li><a>Idea</a></li>
        <li><a>Log In</a></li>
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
