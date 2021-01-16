import { all } from 'redux-saga/effects';

//import defaultSagas from '../default/sagas';
import starSystemSagas from '../star-systems/sagas';

function* sagas() {
  yield all([starSystemSagas()]);
}

export default sagas;
