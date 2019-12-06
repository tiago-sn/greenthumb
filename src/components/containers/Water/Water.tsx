import React from "react"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from "redux";

import { ApplicationState } from "../../../store/types";
import { ActionCreators } from "../../../store/actions";
import { Water as water } from "../../../service/api/types";

import Header from '../../Header';

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
  return (
    <div>
      <Header />
      <h1>Water</h1>

      <ul>
        <li onClick={() => selectWater("daily")}>daily</li>
        <li onClick={() => selectWater("rarely")}>rarely</li>
        <li onClick={() => selectWater("regularly")}>regularly</li>
      </ul>

      <span>Selected: {water}</span>

      <br />

      <Link to={location => {
        if (water !== "") return linkTo;
        else return location;
      }}>
        Next
      </Link>
      <br />
      <Link to={previous}>
        Previous
      </Link>
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
