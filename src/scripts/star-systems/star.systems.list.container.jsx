import StarSystemsListComponent from '../star-systems/star.systems.list.component';
import { connect } from 'react-redux';
import actions from './actions';
import {getStarSystemRowList, getPaging, getLinks} from './selector';

const mapStateToProps = state => {
  const starSystems = getStarSystemRowList(state);
  const paging = getPaging(state);
  const linkList = getLinks(state);
  return { starSystems, paging, linkList};
};

const mapDispatchToProps = dispatch => {
  return {
    onMount() {
      dispatch(actions.getStarSystems('http://webdevelopertest.playfusionservices.com/webapptest/stars?size=25&sort=numberOfPlanets,desc'))
    },
    getNewPage(page) {
      dispatch(actions.getStarSystems(page.href))
    },
    getSystemPlanets(url) {
      dispatch(actions.getSystemPlanets(url))
    },
    getStarAltNames(url) {
      dispatch(actions.getStarAltNames(url))
    },
    setChosenSystem(self) {
      dispatch(actions.setChosenSystem(self))
    }
  };
};

const StarSystemsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarSystemsListComponent);

export default StarSystemsListContainer;
