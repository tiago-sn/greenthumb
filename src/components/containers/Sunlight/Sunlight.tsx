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
        {/* <label htmlFor="high">
          <input
            type="radio"
            name="sun"
            id="high"
            value="high"
            onChange={handleCheckboxChenge}
          />
          <span>High sunlight</span>
        </label> */}

        <RadioButton
          name="sun"
          id="high"
          value="high"
          handleChange={handleCheckboxChenge}
        >
          High sunlight
        </RadioButton>

        <label htmlFor="low">
          <input
            type="radio"
            name="sun"
            id="low"
            value="low"
            onChange={handleCheckboxChenge}
          />
          <span>Low sunlight</span>
        </label>

        <label htmlFor="no">
          <input
            type="radio"
            name="sun"
            id="no"
            value="no"
            onChange={handleCheckboxChenge}
          />
          <span>No sunlight</span>
        </label>
      </form>

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
