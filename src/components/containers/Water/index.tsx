import React from "react" 
import { Link } from 'react-router-dom';

interface IWaterProps {
  linkTo: string;
  previous: string;
}

const Water: React.FC<IWaterProps> = ({ linkTo, previous }) => {
  return (
    <div>
      <h1>Water</h1>
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

export default Water;
