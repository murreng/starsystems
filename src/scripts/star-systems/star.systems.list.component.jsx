import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/home.css';
import DataRowComponent from '../common/data.row.component';
import PropTypes from 'prop-types';

const StarSystemsListComponent = props => {

  const {
    starSystems,
    onMount
  } = props;

useEffect(() => {
  mountCallBack();
}, [mountCallBack]);

  const mountCallBack = useCallback(() => {
    onMount();
  },[onMount]);

  const displayStarSystems = () => {
      starSystems.map((system, i) => 
      {
            <DataRowComponent key={}/>
      })
  }
  
  return (
    <div className="starSystemListContainer">
        <div className="home-title">Star Systems List</div>
        {details.}
    </div>
  );
};

StarSystemsListComponent.propTypes = {
    starSystems:PropTypes.array,
    onMount: PropTypes.func
};

StarSystemsListComponent.defaultProps = {};
export default StarSystemsListComponent;
