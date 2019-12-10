import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from "redux";

import { Plant, Sunlight, Water, Pets } from "../../../service/api/types";
import { ApplicationState } from "../../../store/types";
import { ActionCreators } from "../../../store/actions";

import Button from '../../Button';

interface IStateProps {
  plants: Plant[],
  sun: Sunlight,
  water: Water,
  pets: Pets
}

interface IDispatchProps {
  requestPlantList: typeof ActionCreators.requestPlantList
}

interface IOwnState {
  linkTo: string
}

type IResultsProps = IOwnState & IStateProps & IDispatchProps;

const Results: React.FC<IResultsProps> = (
  { linkTo, plants, sun, water, pets, requestPlantList }
) => {

  useEffect(() => {
    requestPlantList({sun, water, pets})
  }, [pets, requestPlantList, sun, water])
  return (
    <div>
      <ul>
        {
          plants.length > 0 ? 
          plants.map(plant => <li>{plant.name}</li>) : 
          <span>Loading...</span>
        }
      </ul>

      <h1>Results</h1>

      <Button
        to={linkTo}
      >
        buy now
      </Button>
      {/* <Link to={linkTo}>
        Next
      </Link> */}
    </div>
  );
}

const mapStateToProps = (state: ApplicationState): IStateProps => ({
  plants: state.plants,
  sun: state.sun,
  water: state.water,
  pets: state.pets
})

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps =>
  bindActionCreators(ActionCreators, dispatch);

export default connect<IStateProps, IDispatchProps, IOwnState, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(Results);
