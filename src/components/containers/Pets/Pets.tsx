import React from "react"
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from "../../../store/types";
import { ActionCreators } from '../../../store/actions';
import { Pets as pets } from "../../../service/api/types";

import Button from '../../Button';
import Title from '../../Title';
import { StyledSubtitle } from './style';
import petsImage from './img/dog.png';

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
  return (
    <div>
      <img src={petsImage} alt="A digital draw of a dog." />

      <Title>Do you have pets?<br /> Do they <strong>chew</strong> plants?</Title>
      <StyledSubtitle>We are asking because some plants<br /> can be toxic for your buddy.</StyledSubtitle>

      <ul>
        <li onClick={() => selectPets('true')}>true</li>
        <li onClick={() => selectPets('false')}>false</li>
      </ul>

      <span>Selected: {pets}</span>

      <br />
      {/* 
      <Link to={location => {
        if (pets !== "") return linkTo;
        else return location;
      }}>
        Next
      </Link> */}

      <Button
        to={linkTo}
        deactivated={pets === "" ? true : false}
        arrow="right arrow"
      >
        Next
      </Button>

      <br />

      <Button
        to={previous}
        light
        arrow="left arrow"
      >
        Previous
      </Button>

      {/*       
      <Link to={previous}>
        Previous
      </Link> */}
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
