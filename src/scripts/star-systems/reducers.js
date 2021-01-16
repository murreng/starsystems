import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { types } from './actions';

const starSystemsState = handleActions(
  {
    [types.UPDATE_ITEM](state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },

    [types.GET_STAR_SYSTEMS](state, { payload }) {
      return {
        ...state
      };
    },

    [types.SET_STAR_SYSTEMS](state, { payload }) {
      return {
        ...state,
        starSystems:payload
      };
    },

  },
  {
    starSystems: []
  }
);

const reducers = combineReducers({
    starSystemsState
});

export default reducers;
