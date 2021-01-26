import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/home.css';
import DataRowComponent from '../common/data.row.component';
import PropTypes from 'prop-types';
import moment from 'moment';

const StarSystemsDetailPlanetsComponent = props => {
  const { planets } = props;

  if (planets < 1) {
    return null;
  }

  return (
    <div className="detail-planets-container">
      <div className="tables">
        <div className="star-systems-title">Planets</div>
        {planets.map((item, idx) => {
          const items = (({
            name,
            radius,
            age,
            temperature,
            mass,
            discoveryMethod,
            description,
            discoveryDate,
            list
          }) => ({ name, radius, age, temperature, mass, discoveryMethod, description, discoveryDate, list }))(item);
          Object.keys(items).map(val => {
            switch (val) {
              case 'radius':
                items[val] = items[val] ? `${items[val]} km` : 'unknown';
                break;
              case 'discoveryDate':
                items[val] = items[val] ? `${moment(items[val]).format('YYYY-MM-DD')}` : 'unknown';
                break;
            }
          });

          const keyVals =
            idx === 0 ? [[`Planet ${idx + 1}`, '', true]] : [['', '', false], [`Planet ${idx + 1}`, '', true]];
          Object.keys(items).map(val => keyVals.push([val, items[val] ? items[val] : '', false]));

          return keyVals.map((arr, idx) => {
            return DataRowComponent({ rowData: arr, idx, newTitle: arr[2] });
          });
        })}
      </div>
    </div>
  );
};

StarSystemsDetailPlanetsComponent.propTypes = {
  starSystems: PropTypes.array,
  onMount: PropTypes.func
};

StarSystemsDetailPlanetsComponent.defaultProps = {};
export default StarSystemsDetailPlanetsComponent;
