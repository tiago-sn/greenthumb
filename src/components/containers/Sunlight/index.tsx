import React from 'react';
import { Link } from 'react-router-dom';

interface ISunlightProps {
  linkTo: string;
  previous: string;
}

const Sunlight: React.FC<ISunlightProps> = ({ linkTo, previous }) => {
  return (
    <div>
      <h1>Sunlinght</h1>
      <Link to={linkTo}>
        Next
      </Link>
      <br/>
      <Link to={previous}>
        Home
      </Link>
    </div>
  );
}

export default Sunlight;