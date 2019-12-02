import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Header';

interface ISunlightProps {
  linkTo: string;
  previous: string;
}

const Sunlight: React.FC<ISunlightProps> = ({ linkTo, previous }) => {

  return (
    <div>
      <Header />
      <h1>Sunlinght</h1>

      <br />

      <Link to={linkTo}>
        Next
      </Link>
      <br />
      <Link to={previous}>
        Home
      </Link>
    </div>
  );
}

export default Sunlight;