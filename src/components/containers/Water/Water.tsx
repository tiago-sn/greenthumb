import React from "react"
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from "redux";

import { ApplicationState } from "../../../store/types";
import { ActionCreators } from "../../../store/actions";
import { Water as water } from "../../../service/api/types";

import Button from '../../Button';
import Title from '../../Title';
import RadioButton from '../../RadioButton';

import waterImage from "./img/wateringcan.png";
import oneDropImage from './img/one-drop.svg';
import twoDropsImage from './img/two-drops.svg';
import threeDropsImage from './img/three-drops.svg';


interface IStateProps {
  water: water;
}

interface IDispatchProps {
  selectWater: typeof ActionCreators.selectWater;
}

interface IOwnProps {
  linkTo: string;
  previous: string;
}

type IWaterProps = IOwnProps & IStateProps & IDispatchProps;

const Water: React.FC<IWaterProps> = ({ linkTo, previous, selectWater, water }) => {
  const handleCheckboxChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectWater((e.currentTarget.value as water))
  }

  return (
    <div>
      <img src={waterImage} alt="A digital draw of a smiling watering can" />

      <Title>How often do you want to <strong>water</strong> your plant?</Title>

      <form action="">
        <RadioButton
          name="water"
          id="rarely"
          value="rarely"
          img={{
            src: oneDropImage,
            alt: "One drop."
          }}
          handleChange={handleCheckboxChenge}
        >
          Rarely
        </RadioButton>
        <RadioButton
          name="water"
          id="regularly"
          value="regularly"
          img={{
            src: twoDropsImage,
            alt: "Two drops."
          }}
          handleChange={handleCheckboxChenge}
        >
          Regularly
        </RadioButton>
        <RadioButton
          name="water"
          id="daily"
          value="daily"
          img={{
            src: threeDropsImage,
            alt: "Three drops."
          }}
          handleChange={handleCheckboxChenge}
        >
          Daily
        </RadioButton>
      </form>

      <span>Selected: {water}</span>

      <Button
        to={linkTo}
        deactivated={water === "" ? true : false}
        arrow="right arrow"
      >
        Next
      </Button>

      <Button
        to={previous}
        arrow="left arrow"
        light
      >
        Previous
      </Button>
    </div>
  );
}

const mapStateToProps = (state: ApplicationState): IStateProps => ({
  water: state.water
});

const mapDispatchToProps = (dispach: Dispatch) => {
  return bindActionCreators(ActionCreators, dispach)
}

export default connect<IStateProps, IDispatchProps, IOwnProps, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(Water);
