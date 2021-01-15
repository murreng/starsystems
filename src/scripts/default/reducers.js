import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { types } from './actions';

const defaultState = handleActions(
  {
    [types.UPDATE_ITEM](state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },

    [types.GET_PRODUCT_TYPE](state, { payload }) {
      return {
        ...state
      };
    },

    [types.SET_PRODUCT_TYPE](state, { payload }) {
      return {
        ...state,
        currentProductType:payload
      };
    },

  },
  {
    currentProductType: {}
  }
);

const reducers = combineReducers({
  defaultState
});

export default reducers;
