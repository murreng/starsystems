import StarSystemsDetailPlanetsComponent from './star.systems.detail.planets.component';
import { connect } from 'react-redux';
import actions from './actions';
import { getGetSystemPlanets} from './selector';

const mapStateToProps = state => {
  const planets = getSystemPlanets(state);
  return { planets};
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const StarSystemsDetailPlanetsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarSystemsDetailPlanetsComponent);

export default StarSystemsDetailPlanetsContainer;
