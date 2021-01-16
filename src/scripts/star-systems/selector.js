import { createSelector } from 'reselect';

const getState = state => state || {};

const getstarSystemsState = createSelector(
  [getState],
  defaultState => defaultState.starSystemsState || {}
);

  const getStarSystems = createSelector(
    [getstarSystemsState],
    stars => stars.starSystemsState.starSystems || []
  );

export { getstarSystemsState,  getStarSystems};
