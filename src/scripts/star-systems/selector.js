import { createSelector } from 'reselect';

const getState = state => state || {};

const getstarSystemsState = createSelector(
  [getState],
  defaultState => defaultState.starSystemsState || {}
);

  const getStarSystems = createSelector(
    [getstarSystemsState],
    stars => stars.starSystems.starSystems || []
  );

  const getPaging = createSelector(
    [getstarSystemsState],
    stars => stars.starSystems.paging || []
  );

  const getLinks = createSelector(
    [getstarSystemsState],
    stars => stars.starSystems.links || []
  );

  const getStarAltNames = createSelector(
    [getstarSystemsState],
    stars => stars.starAltNames.starAltNames || []
  );

  const getSystemPlanets = createSelector(
    [getstarSystemsState],
    stars => stars.systemPlanets.planets || []
  );

  const getStarSystemRowList = createSelector([getStarSystems], systems => {
    
    const rowData = [];

    systems.map((system, i) => 
      {
        rowData.push((({ name, distance, numberOfPlanets,_links}) => ({rowData:{ name, distance, numberOfPlanets}, _links }))(system));
      });

    return rowData.sort((a, b) => (a.numberOfPlanets < b.numberOfPlanets) ? 1:-1);
  });

export { getStarSystemRowList, getPaging, getLinks, getStarAltNames, getSystemPlanets};
