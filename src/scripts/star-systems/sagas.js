import { all, put, call, takeEvery, select } from 'redux-saga/effects';
import actions, { types } from './actions';
import axios from 'axios';

function* getStarSystems({ payload }) {
  try {
    const data = yield call(() => {
      return axios.get(payload);
    });
    yield put(actions.setStarSystems(data.data));
  } catch (error) {
    console.debug(error);
  }
}

function* getSystemPlanets({ payload }) {
  try {
    const data = yield call(() => {
      return axios.get(payload);
    });
    yield put(actions.setSystemPlanets(data.data));
  } catch (error) {
    console.debug(error);
  }
}

function* getStarAltNames({ payload }) {
  try {
    const data = yield call(() => {
      return axios.get(payload);
    });
    yield put(actions.setStarAltNames(data.data));
  } catch (error) {
    console.debug(error);
  }
}

function* getSearchStarAltNames({ payload }) {
  try {
    const data = yield call(() => {
      return axios.get(payload);
    });
    yield put(actions.setSearchStarAltNames(data.data));
  } catch (error) {
    console.debug(error);
  }
}

function* getStarDetailsAndAction({ payload }) {
  try {
    const data = yield call(() => {
      return axios.get(payload);
    });
    const altNamesUrl = data.data._links.additionalNames.href;
    const planetUrl = data.data._links.planets.href;
    yield call(getStarAltNames, { payload: altNamesUrl });
    yield call(getSystemPlanets, { payload: planetUrl });
    yield put(actions.setChosenSystemSingle(data.data));
  } catch (error) {
    console.debug(error);
  }
}

function* watchStarSystems() {
  yield takeEvery(types.GET_STAR_SYSTEMS, getStarSystems);
  yield takeEvery(types.GET_SYSTEM_PLANETS, getSystemPlanets);
  yield takeEvery(types.GET_STAR_ALT_NAMES, getStarAltNames);
  yield takeEvery(types.GET_SEARCH_STAR_ALT_NAMES, getSearchStarAltNames);
  yield takeEvery(types.GET_STAR_DETAILS, getStarDetailsAndAction);
}

function* sagas() {
  yield all([watchStarSystems()]);
}

export default sagas;
