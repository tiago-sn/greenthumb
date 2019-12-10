import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../../store/types';
import { ActionCreators } from '../../../store/actions';
import { Sunlight as Sun } from '../../../service/api/types';

import Button from '../../Button';
import Title from "../../Title";
import RadioButton from '../../RadioButton';

import sunImage from './img/sun.png';
import highSunImage from './img/high-sun.svg';
import lowSunImage from './img/low-sun.svg';
import noSunImage from './img/no-answer.svg';

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
  const formStyle = {
    display: "grid"
  }

  const handleCheckboxChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectSunlight((e.currentTarget.value as Sun))
  }

  return (
    <main className="sunlight">
      <img src={sunImage} alt="a digital drow of a sun using sunglass." />

      <Title className="title">First, set the amount<br /> of <strong>sunlight</strong> your<br /> plant will get.</Title>

      <form action="" style={formStyle}>
        <RadioButton
          name="sun"
          id="high"
          value="high"
          img={{
            src: highSunImage,
            alt: "High sunlight"
          }}
          handleChange={handleCheckboxChenge}
        >
          High sunlight
        </RadioButton>
        <RadioButton
          name="sun"
          id="low"
          value="low"
          img={{
            src: lowSunImage,
            alt: "Low sunligh"
          }}
          handleChange={handleCheckboxChenge}
        >
          Low sunlight
        </RadioButton>
        <RadioButton
          name="sun"
          id="no"
          value="no"
          img={{
            src: noSunImage,
            alt: "No sunlight"
          }}
          handleChange={handleCheckboxChenge}
        >
          No sunlight
        </RadioButton>
      </form>

      <span>Selected: {sun}</span>


      <Button
        to={linkTo}
        deactivated={sun === "" ? true : false}
        arrow="right arrow"
      >
        Next
      </Button>


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
