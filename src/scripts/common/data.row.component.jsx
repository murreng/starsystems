import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/tables.css';
import PropTypes from 'prop-types';

const DataRowComponent = props => {
 
  return (
    <div className="row">
     {props.map((item, i) => {
         return <span className="item">{item}</span>
     })}
    </div>
  );
};

DataRowComponent.propTypes = {
    starSystems:PropTypes.array,
    onMount: PropTypes.func
};

DataRowComponent.defaultProps = {};
export default DataRowComponent;
