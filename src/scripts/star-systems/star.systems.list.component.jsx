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
        const {name, numberOfPlanets} = system;
        const picked = (({ a, c }) => ({ a, c }))(object);

        return <DataRowComponent props={system}/>
      })
  }
  
  return (
    <div className="starSystemListContainer">
        <div className="home-title">Star Systems List</div>
        {starSystems.map((system, i) => 
      {
        return <DataRowComponent props={system}/>
      })}
    </div>
  );
};

StarSystemsListComponent.propTypes = {
    starSystems:PropTypes.array,
    onMount: PropTypes.func
};

StarSystemsListComponent.defaultProps = {};
export default StarSystemsListComponent;
