import{all,put,call, takeEvery, select} from 'redux-saga/effects';
import actions, {types} from './actions';
import axios from 'axios';

function* getSingleProduct() {
const options ={headers:{'productTypeCode':3}}

    try{
        var jim = 7;
        const info = yield call(axios.get('https://localhost:44362/api/singleproduct', {
            headers: {
              'productTypeCode': '3',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
          }));
          
          yield put(actions.setProductType(data))
    } catch(error){
        var bill = error;
        var ken = 8;
        var tell = 9
    }
}

function* watchProductType()
{
    yield takeEvery(types.GET_PRODUCT_TYPE, getSingleProduct);
}

function* sagas(){
    yield all([watchProductType()]);
}

export default sagas;