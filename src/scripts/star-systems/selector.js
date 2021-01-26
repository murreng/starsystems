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

const getAltPaging = createSelector(
  [getstarSystemsState],
  stars => stars.searchStarAltNames.paging || []
);

const getAltLinks = createSelector(
  [getstarSystemsState],
  stars => stars.searchStarAltNames.links || []
);

const getSearchStarAltNames = createSelector(
  [getstarSystemsState],
  stars => stars.searchStarAltNames.searchStarAltNames || []
);

const getSystemPlanets = createSelector(
  [getstarSystemsState],
  stars => stars.systemPlanets.planets || []
);

const getChosenSystem = createSelector(
  [getstarSystemsState],
  stars => stars.starSystems.chosenSystem || null
);

const getSearchStarSystemRowList = createSelector(
  [getSearchStarAltNames],
  alts => {
    const rowData = [];

    alts.map((alts, i) => {
      rowData.push((({ name, _links }) => ({ rowData: { name }, _links }))(alts));
    });

    return rowData;
  }
);

const getStarSystemRowList = createSelector(
  [getStarSystems],
  systems => {
    const rowData = [];

    systems.map((system, i) => {
      rowData.push(
        (({ name, distance, numberOfPlanets, _links }) => ({ rowData: { name, distance, numberOfPlanets }, _links }))(
          system
        )
      );
    });

    return rowData.sort((a, b) => (a.numberOfPlanets < b.numberOfPlanets ? -1 : 1));
  }
);

export {
  getStarSystemRowList,
  getPaging,
  getLinks,
  getStarAltNames,
  getSystemPlanets,
  getChosenSystem,
  getSearchStarSystemRowList,
  getAltPaging,
  getAltLinks
};
