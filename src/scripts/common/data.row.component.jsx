import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/tables.css';
import PropTypes from 'prop-types';

const DataRowComponent = props => {

  const {
    rowData,
    links,
    rowClicked,
    idx
  } = props;
 
  return (
    links? <div onClick ={() => rowClicked(links, idx)} className="row">
    {rowData.map((item, i) => {
      return <div className="item">{item}</div>
    })}
   </div> :
     <div className="row">
     {rowData.map((item, i) => {
       return <div  className="item">{item}</div>
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
