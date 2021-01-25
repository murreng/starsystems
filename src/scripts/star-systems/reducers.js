import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { types } from './actions';

const starSystems = handleActions(
  {
    [types.GET_STAR_SYSTEMS](state, { payload }) {
      return {
        ...state,
        fetching: true
      };
    },

    [types.SET_STAR_SYSTEMS](state, { payload }) {
      return {
        ...state,
        starSystems:payload._embedded.stars,
        paging:payload.page,
        links:payload._links,
        fetching: false
      };
    },

    [types.SET_CHOSEN_SYSTEM](state, { payload }) {
      return {
        ...state,
        chosenSystem:state.starSystems.find(f => f._links.self.href === payload)
      };
    },
  },
  {
    starSystems: [],
    SearchStarAltNames:[],
    paging:{},
    links:{},
    fetching:false,
    chosenSystem:null
  }
);

const searchStarAltNames = handleActions(
  {
    [types.GET_SEARCH_STAR_ALT_NAMES](state, { payload }) {
      return {
        ...state,
        fetching: true
      };
    },

    [types.SET_SEARCH_STAR_ALT_NAMES](state, { payload }) {
      return {
        ...state,
        searchStarAltNames:payload._embedded.alternateNames,
        paging:payload.page,
        links:payload._links,
        fetching: false
      };
    },

  },
  {
    searchStarAltNames: [],
    paging:{},
    links:{},
    fetching:false
  }
);

const starAltNames = handleActions(
  {
    [types.GET_STAR_ALT_NAMES](state, { payload }) {
      return {
        ...state,
        fetching: true
      };
    },

    [types.SET_STAR_ALT_NAMES](state, { payload }) {
      return {
        ...state,
        starAltNames:payload._embedded.alternateNames,
        fetching: false
      };
    },

  },
  {
    starAltNames: [],
    fetching:false
  }
);

const systemPlanets = handleActions(
  {
    [types.GET_SYSTEM_PLANETS](state, { payload }) {
      return {
        ...state,
        fetching: true
      };
    },

    [types.SET_SYSTEM_PLANETS](state, { payload }) {
      return {
        ...state,
        planets:payload._embedded.planets,
        fetching: false
      };
    },

  },
  {
    planets: [],
    fetching:false,
  }
);

const reducers = combineReducers({
    starSystems,
    starAltNames,
    systemPlanets,
    searchStarAltNames
});

export default reducers;
