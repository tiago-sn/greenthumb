import React from 'react';
import { Link } from 'react-router-dom';

interface IHomeProps {
  linkTo: string;
}

const Home: React.FC<IHomeProps> = ({ linkTo }) => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={linkTo}>
        Next
      </Link>
    </div>
  );
}

export default Home;