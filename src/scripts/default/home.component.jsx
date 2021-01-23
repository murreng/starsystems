import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/home.css';
import PropTypes from 'prop-types';
import StarSystemsListContainer from '../star-systems/star.systems.list.container';
import StarSystemsDetailAltNamesContainer from '../star-systems/star.systems.detail.alt.names.container';
import StarSystemsDetailPlanetsContainer from '../star-systems/star.systems.detail.planets.container';
//import StarSystemsDetailContainer from '../star-systems/star.systems.planets.container';

const HomeComponent = props => {
  return (
    <div>
      <div className="home-title">Star systems app</div>
      <div className="star-systems-container">
        <StarSystemsListContainer/>
        <div>
          
          <StarSystemsDetailAltNamesContainer/>
          <StarSystemsDetailPlanetsContainer/>
        </div>
      </div>
    </div>
  );
};

HomeComponent.propTypes = {
};

HomeComponent.defaultProps = {};
export default HomeComponent;
