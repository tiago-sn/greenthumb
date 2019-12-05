import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../../store/types';
import { ActionCreators } from '../../../store/actions';
import { Sunlight as Sun } from '../../../service/api/types';

import Header from '../../Header';

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

      <Link to={(location) => {
        if (sun !== "") return linkTo;
        else return location;
      }}>
        Next
      </Link>
      <br />
      <Link to={previous}>
        Home
      </Link>
    </div>
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
