import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Header';

interface IHomeProps {
  linkTo: string;
}

const Home: React.FC<IHomeProps> = ({ linkTo }) => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <Link to={linkTo}>
        Next
      </Link>
    </div>
  );
}

export default Home;