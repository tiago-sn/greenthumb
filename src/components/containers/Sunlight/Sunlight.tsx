import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { UserChoicesState } from '../../../store/types';
import { userChoicesActionCreators } from '../../../store/actions';
import { Sunlight as Sun, Water, Pets } from '../../../service/api/types';

import Header from '../../Header';

interface IStateProps {
  sun: Sun;
  water: Water;
  pets: Pets;
}

interface IDispatchProps {
  selectSunlight: typeof userChoicesActionCreators.selectSunlight;
}

interface IOwnProps {
  linkTo: string;
  previous: string;
}

type ISunlightProps = IStateProps & IDispatchProps & IOwnProps;

const Sunlight: React.FC<ISunlightProps> = ({ linkTo, previous, selectSunlight, sun }) => {

  return (
    <div>
      <Header />
      <h1>Sunlinght</h1>

      <ul>
        <li onClick={() => selectSunlight("high")}>high</li>
        <li onClick={() => selectSunlight("low")}>low</li>
        <li onClick={() => selectSunlight("no")}>no</li>
      </ul>

      <span>Selected: {sun}</span>

      <br />

      <Link to={linkTo}>
        Next
      </Link>
      <br />
      <Link to={previous}>
        Home
      </Link>
    </div>
  );
}

const mapStateToProps = (state: UserChoicesState) => ({
  ...state
});

const mapDispatchToProps = (dispach: Dispatch) => {
  return bindActionCreators(userChoicesActionCreators, dispach)
}

export default connect<IStateProps, IDispatchProps, IOwnProps, ISunlightProps>(
  mapStateToProps,
  mapDispatchToProps
)(Sunlight);