import{all,put,call, takeEvery, select} from 'redux-saga/effects';
import actions, {types} from './actions';
import axios from 'axios';

function* getStarSystems({payload}) {
   try{
       const data = yield call(() => {return axios.get(payload)});
        yield put(actions.setStarSystems(data.data))
    } catch(error){
        console.debug(error)
    }
}

function* getSystemPlanets({payload}) {
    try{
        const data = yield call(() => {return axios.get(payload)});
         yield put(actions.setSystemPlanets(data.data))
     } catch(error){
         console.debug(error)
     }
 }

 function* getStarAltNames({payload}) {
    try{
        const data = yield call(() => {return axios.get(payload)});
         yield put(actions.setStarAltNames(data.data))
     } catch(error){
         console.debug(error)
     }
 }

function* watchStarSystems()
{
    yield takeEvery(types.GET_STAR_SYSTEMS, getStarSystems);
    yield takeEvery(types.GET_SYSTEM_PLANETS, getSystemPlanets);
    yield takeEvery(types.GET_STAR_ALT_NAMES, getStarAltNames);
}

function* sagas(){
    yield all([watchStarSystems()]);
}

export default sagas;
