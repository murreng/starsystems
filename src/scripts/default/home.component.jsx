import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/home.css';
import PropTypes from 'prop-types';
import StarSystemsListContainer from '../star-systems/star.systems.list.container';

const HomeComponent = props => {
  return (
    <div>
      <div className="home-title">Star systems app</div>

      <StarSystemsListContainer/>
    </div>
  );
};

HomeComponent.propTypes = {
};

HomeComponent.defaultProps = {};
export default HomeComponent;
