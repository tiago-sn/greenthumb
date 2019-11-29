import React from "react" 
import { Link } from 'react-router-dom';

interface IPetsProps {
  linkTo: string;
  previous: string;
}

const Pets: React.FC<IPetsProps> = ({ linkTo, previous }) => {
  return (
    <div>
      <h1>Pets</h1>
      <Link to={linkTo}>
        Next
      </Link>
      <br/>
      <Link to={previous}>
        Previous
      </Link>
    </div>
  );
}

export default Pets;
