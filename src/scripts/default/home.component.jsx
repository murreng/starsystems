import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/home.css';
import StarSystemsListContainer from '../star-systems/star.systems.list.container';
import StarSystemsDetailAltNamesContainer from '../star-systems/star.systems.detail.alt.names.container';
import StarSystemsDetailPlanetsContainer from '../star-systems/star.systems.detail.planets.container';
import StarSystemsDetailContainer from '../star-systems/star.systems.detail.container';
import StarSystemsSearchContainer from '../star-systems/star.systems.search.container';

const HomeComponent = props => {
  return (
    <div>
      <div className="home-title">Star systems app</div>
      <div className="star-systems-container">
        <StarSystemsListContainer />
        <StarSystemsSearchContainer />
        <div className="star-systems-detail-container">
          <StarSystemsDetailContainer />
          <StarSystemsDetailAltNamesContainer />
          <StarSystemsDetailPlanetsContainer />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
