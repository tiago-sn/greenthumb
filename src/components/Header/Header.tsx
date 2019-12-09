import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import Logo from './img/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo Green Thumb" />
      </Link>
    </header>);
}

export default Header;