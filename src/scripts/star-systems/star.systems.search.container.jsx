import StarSystemsSearchComponent from './star.systems.search.component';
import { connect } from 'react-redux';
import actions from './actions';
import { getSearchStarSystemRowList, getAltPaging, getAltLinks } from './selector';

const mapStateToProps = state => {
  const searchStarAltNames = getSearchStarSystemRowList(state);
  const paging = getAltPaging(state);
  const linkList = getAltLinks(state);
  return { searchStarAltNames, paging, linkList };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchStarAltNames(url) {
      dispatch(actions.getSearchStarAltNames(url));
    },
    showDetails(url) {
      dispatch(actions.getStarDetails(url));
    }
  };
};

const StarSystemsSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarSystemsSearchComponent);

export default StarSystemsSearchContainer;
