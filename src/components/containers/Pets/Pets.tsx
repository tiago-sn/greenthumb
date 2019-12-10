import React from "react"
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from "../../../store/types";
import { ActionCreators } from '../../../store/actions';
import { Pets as pets } from "../../../service/api/types";

import Button from '../../Button';
import Title from '../../Title';
import { StyledSubtitle } from './style';
import RadioButton from '../../RadioButton';

import dogImage from './img/dog.png';
import petImage from './img/pet.svg';
import noPetImage from './img/no-answer.svg';

interface IStateProps {
  pets: pets;
}

interface IDispatchProps {
  selectPets: typeof ActionCreators.selectPets;
}

interface IOwnProps {
  linkTo: string;
  previous: string;
}

type IPetsProps = IStateProps & IDispatchProps & IOwnProps;

const Pets: React.FC<IPetsProps> = ({ linkTo, previous, pets, selectPets }) => {
  const handleCheckboxChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectPets((e.currentTarget.value as pets))
  }

  return (
    <div>
      <img src={dogImage} alt="A digital draw of a dog." />

      <Title>Do you have pets?<br /> Do they <strong>chew</strong> plants?</Title>
      <StyledSubtitle>We are asking because some plants<br /> can be toxic for your buddy.</StyledSubtitle>

      <form action="">
        <RadioButton
          name="pet"
          id="true"
          value="true"
          img={{
            src: petImage,
            alt: "A pet."
          }}
          handleChange={handleCheckboxChenge}
        >
          Yes
        </RadioButton>
        <RadioButton
          name="pet"
          id="false"
          value="false"
          img={{
            src: noPetImage,
            alt: "No pets."
          }}
          handleChange={handleCheckboxChenge}
        >
          No/They don't care
        </RadioButton>
      </form>

      <span>Selected: {pets}</span>

      <Button
        to={linkTo}
        deactivated={pets === "" ? true : false}
        arrow="right arrow"
      >
        Next
      </Button>
      <Button
        to={previous}
        light
        arrow="left arrow"
      >
        Previous
      </Button>
    </div>
  );
}

const mapStateToProps = (state: ApplicationState): IStateProps => ({
  pets: state.pets
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ActionCreators, dispatch)


export default connect<IStateProps, IDispatchProps, IOwnProps, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(Pets);
