import React from "react"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from "../../../store/types";
import { ActionCreators } from '../../../store/actions';
import { Pets as pets } from "../../../service/api/types";

import Header from '../../Header';
import Button from '../../Button';

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
      <h1>Pets</h1>

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
        deactivated={ pets === "" ? true : false }
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
