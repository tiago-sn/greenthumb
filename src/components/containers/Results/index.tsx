import React from "react";
import { Link } from 'react-router-dom';

interface IResultsProps {
  linkTo: string
}

const Results: React.FC<IResultsProps> = ({ linkTo }) => {
  return (
    <div>
      <h1>Results</h1>
      <Link to={linkTo}>
        Next
      </Link>
    </div>
  );
}

export default Results;
