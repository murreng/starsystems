import StarSystemsListComponent from '../star-systems/star.systems.list.component';
import { connect } from 'react-redux';
import actions from './actions';
import {getStarSystems} from './selector';

const mapStateToProps = state => {
const starSystems = getStarSystems(state);
  return { starSystems};
};

const mapDispatchToProps = dispatch => {
  return {
    onMount() {
      dispatch(actions.getStarSystems())
    }
  };
};

const StarSystemsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarSystemsListComponent);

export default StarSystemsListContainer;