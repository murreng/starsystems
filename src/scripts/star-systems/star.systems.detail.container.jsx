import StarSystemsDetailComponent from './star.systems.detail.component';
import { connect } from 'react-redux';
import { getChosenSystem} from './selector';

const mapStateToProps = state => {
  const chosen = getChosenSystem(state);
  return { chosen};
};


const StarSystemsDetailContainer = connect(
  mapStateToProps
)(StarSystemsDetailComponent);

export default StarSystemsDetailContainer;
