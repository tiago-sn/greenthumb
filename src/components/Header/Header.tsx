import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Logo Green Thumb" />
      </Link>
    </header>);
}

export default Header;