import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/home.css';
import DataRowComponent from '../common/data.row.component';
import PropTypes from 'prop-types';

const StarSystemsDetailAltNamesComponent = props => {
  const { altNames } = props;

  if (altNames.length < 1) {
    return null;
  }

  return (
    <div className="tables">
      <div className="star-systems-title">Alternative names</div>
      {altNames.map((planet, i) => {
        return DataRowComponent({ rowData: [planet.name] });
      })}
    </div>
  );
};

StarSystemsDetailAltNamesComponent.propTypes = {
  starSystems: PropTypes.array,
  onMount: PropTypes.func
};

StarSystemsDetailAltNamesComponent.defaultProps = {};
export default StarSystemsDetailAltNamesComponent;
