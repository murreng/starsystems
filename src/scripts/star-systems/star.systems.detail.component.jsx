import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/home.css';
import DataRowComponent from '../common/data.row.component';
import PropTypes from 'prop-types';

const StarSystemsDetailComponent = props => {
  const { chosen } = props;

  if (!chosen) {
    return null;
  }

  const getData = () => {
    const items = (({ name, radius, age, temperature, mass, distance, numberOfPlanets }) => ({
      name,
      radius,
      age,
      temperature,
      mass,
      distance,
      numberOfPlanets
    }))(chosen);
    const keyVals = [];
    Object.keys(items).map(val => {
      switch (val) {
        case 'radius':
          items[val] = items[val] ? `${items[val]} km` : 'unknown';
          break;
        case 'distance':
          items[val] = items[val] ? `${items[val]} light years` : 'unknown';
          break;
      }
    });

    Object.keys(items).map(val => keyVals.push([val, items[val] ? items[val] : 'unknown']));

    return keyVals.map((pair, r) => {
      return DataRowComponent({ rowData: pair });
    });
  };

  return (
    <div className="tables">
      <div className="star-systems-title">Star Details</div>
      {getData()}
    </div>
  );
};

StarSystemsDetailComponent.propTypes = {
  starSystems: PropTypes.array,
  onMount: PropTypes.func
};

StarSystemsDetailComponent.defaultProps = {};
export default StarSystemsDetailComponent;
