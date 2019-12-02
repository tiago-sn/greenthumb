import React from "react"
import { Link } from 'react-router-dom';

import Header from '../../Header';

interface IPetsProps {
  linkTo: string;
  previous: string;
}

const Pets: React.FC<IPetsProps> = ({ linkTo, previous }) => {
  return (
    <div>
      <Header />
      <h1>Pets</h1>

      <ul>
        
      </ul>

      <Link to={linkTo}>
        Next
      </Link>
      <br />
      <Link to={previous}>
        Previous
      </Link>
    </div>
  );
}

export default Pets;
