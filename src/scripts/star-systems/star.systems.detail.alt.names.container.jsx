import StarSystemsDetailAltNamesComponent from './star.systems.detail.alt.names.component';
import { connect } from 'react-redux';
import actions from './actions';
import { getStarAltNames } from './selector';

const mapStateToProps = state => {
  const altNames = getStarAltNames(state);
  return { altNames };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const StarSystemsDetailAltNamesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarSystemsDetailAltNamesComponent);

export default StarSystemsDetailAltNamesContainer;
