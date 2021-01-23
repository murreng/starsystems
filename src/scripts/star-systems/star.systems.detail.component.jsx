import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/home.css';
import DataRowComponent from '../common/data.row.component';
import PropTypes from 'prop-types';

const StarSystemsDetailPlanetsComponent = props => {

  const {
    planets
  } = props;
  
if(planets < 1)
{
  return <div>Planets</div>
}

  return (
    <div className="star-systems-list-container tables">
        <div className="star-systems-title">Planets</div>
        {planets.map((item, a) =>
        {
          const items = (({ name, radius, age,temperature,mass, discoveryMethod, description, discoveryDate, list}) => ({name, radius, age,temperature,mass, discoveryMethod, description, discoveryDate, list}))(item)
          const keyVals = [];
          Object.keys(items).map(val => keyVals.push([val,items[val]?items[val]:'']));

          return keyVals.map((pair, r)=>
          {
            return DataRowComponent({rowData:pair});
          })
        })}
    </div>
  );
};

StarSystemsDetailPlanetsComponent.propTypes = {
    starSystems:PropTypes.array,
    onMount: PropTypes.func
};

StarSystemsDetailPlanetsComponent.defaultProps = {};
export default StarSystemsDetailPlanetsComponent;
