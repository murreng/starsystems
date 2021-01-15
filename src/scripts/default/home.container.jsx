import HomeComponent from './home.component';
import { connect } from 'react-redux';
import actions from './actions';

const mapStateToProps = state => {

  return { };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount() {
      dispatch(actions.getProductType())
    }
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
