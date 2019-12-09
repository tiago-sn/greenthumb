import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../../store/types';
import { ActionCreators } from '../../../store/actions';
import { Sunlight as Sun } from '../../../service/api/types';

import Button from '../../Button';

import leftArrowGreen from './img/left-arrow-green.svg';
import rightArrowWhite from './img/right-arrow-white.svg';
import "./style.scss";

interface IStateProps {
  sun: Sun;
}

interface IDispatchProps {
  selectSunlight: typeof ActionCreators.selectSunlight;
}

interface IOwnProps {
  linkTo: string;
  previous: string;
}

type ISunlightProps = IStateProps & IDispatchProps & IOwnProps;

const Sunlight: React.FC<ISunlightProps> = ({ linkTo, previous, selectSunlight, sun }) => {

  return (
    <main className="sunlight">
      <h1 className="title">First, set the amount of <strong>sunlight</strong> your plant will get.</h1>

      <ul>
        <li onClick={() => selectSunlight("high")}>high</li>
        <li onClick={() => selectSunlight("low")}>low</li>
        <li onClick={() => selectSunlight("no")}>no</li>
      </ul>

      <span>Selected: {sun}</span>

      <br />

      <Button 
        to={linkTo}
        deactivated={sun === "" ? true : false}
        img={{
          src: rightArrowWhite,
          alt: "arrow right"
        }}
      >
        Next
      </Button>

      <br />
      
      <Button
        to={previous}
        className="light"
        img={{
          src: leftArrowGreen,
          alt: "arrow left"
        }}
      >
        Home
      </Button>
    </main>
  );
}

const mapStateToProps = (state: ApplicationState): IStateProps => ({
  sun: state.sun
});

const mapDispatchToProps = (dispach: Dispatch): IDispatchProps => {
  return bindActionCreators(ActionCreators, dispach)
}

export default connect<IStateProps, IDispatchProps, IOwnProps, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(Sunlight);
