import React from "react"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from "redux";

import { UserChoicesState } from "../../../store/types";
import { userChoicesActionCreators } from "../../../store/actions";
import { Sunlight, Water as water, Pets } from "../../../service/api/types";

import Header from '../../Header';

interface IStateProps {
  sun: Sunlight;
  water: water;
  pets: Pets;
}

interface IDispatchProps {
  selectWater: typeof userChoicesActionCreators.selectWater;
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

const mapDispatchToProps = (dispach: Dispatch) => {
  return bindActionCreators(userChoicesActionCreators, dispach)
}

export default connect<IStateProps, IDispatchProps, IOwnProps, IWaterProps>(
  mapStateToProps,
  mapDispatchToProps
)(Water);
