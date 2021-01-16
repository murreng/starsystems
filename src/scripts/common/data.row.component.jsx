import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/tables.css';
import PropTypes from 'prop-types';

const StarSystemsListComponent = props => {

  const {rowData} = props;
  
  return (
    <div>
     {rowData.map((item, i) => {
         <span className="">{item}</span>
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
