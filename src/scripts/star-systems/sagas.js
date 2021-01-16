import{all,put,call, takeEvery, select} from 'redux-saga/effects';
import actions, {types} from './actions';
import api from './api';
import axios from 'axios';

function* getStarSystems() {
   try{
        var jim = 7;
       const data = yield call(() => {return axios.get(`http://webdevelopertest.playfusionservices.com/webapptest/stars`)});
        yield put(actions.setStarSystems(data.data._embedded.stars))
    } catch(error){
        console.debug(error)
        let fff = error;
        let ppp = error;
        var ggg = 7;
    }
}

function* watchStarSystems()
{
    yield takeEvery(types.GET_STAR_SYSTEMS, getStarSystems);
}

function* sagas(){
    yield all([watchStarSystems()]);
}

export default sagas;