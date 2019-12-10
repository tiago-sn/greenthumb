import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../../store/types';
import { ActionCreators } from '../../../store/actions';
import { Sunlight as Sun } from '../../../service/api/types';

import Button from '../../Button';
import Title from "../../Title";
import sunImage from './img/sun.png';

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
      <img src={sunImage} alt="a digital drow of a sun using sunglass." />

      <Title className="title">First, set the amount<br /> of <strong>sunlight</strong> your<br /> plant will get.</Title>

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
        arrow="right arrow"
      >
        Next
      </Button>

      <br />

      <Button
        to={previous}
        arrow="left arrow"
        light
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
