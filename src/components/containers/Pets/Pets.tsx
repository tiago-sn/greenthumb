import React from "react"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { UserChoicesState } from "../../../store/types";
import { userChoicesActionCreators } from '../../../store/actions';
import { Sunlight, Water, Pets as pets } from "../../../service/api/types";

import Header from '../../Header';

interface IStateProps {
  sun: Sunlight;
  water: Water;
  pets: pets;
}

interface IDispatchProps {
  selectPets: typeof userChoicesActionCreators.selectPets;
}

interface IOwnProps {
  linkTo: string;
  previous: string;
}

type IPetsProps = IStateProps & IDispatchProps & IOwnProps;

const Pets: React.FC<IPetsProps> = ({ linkTo, previous, pets, selectPets }) => {
  return (
    <div>
      <Header />
      <h1>Pets</h1>

      <ul>
        <li onClick={() => selectPets('true')}>true</li>
        <li onClick={() => selectPets('false')}>false</li>
      </ul>

      <span>Selected: {pets}</span>

      <br />

      <Link to={linkTo}>
        Next
      </Link>
      <br />
      <Link to={previous}>
        Previous
      </Link>
    </div>
  );
}

const mapStateToProps = (state: UserChoicesState) => ({
  ...state
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(userChoicesActionCreators, dispatch)


export default connect<IStateProps, IDispatchProps, IOwnProps, IPetsProps>(
  mapStateToProps,
  mapDispatchToProps
)(Pets);
