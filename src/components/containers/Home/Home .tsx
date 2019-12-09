import React from 'react';

import Button from '../../Button';

import "./style.scss";
import bg from './img/bg.png';
import rightArrowIcon from './img/right-arrow-icon.svg';

interface IHomeProps {
  linkTo: string;
}

const Home: React.FC<IHomeProps> = ({ linkTo }) => {
  return (
    <main className="home">
      <h1 className="title">Find your next green friend</h1>        
      <Button 
        to={linkTo}
        arrow="right arrow"
      >
        start quizz
      </Button>
      <img src={bg} alt="A digital draw of a person holding a plant and four other plants around."/>
    </main>
  );
}

export default Home;