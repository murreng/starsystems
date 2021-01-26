import React, { useEffect, useCallback } from 'react';
import '../../css/tables.css';
import PropTypes from 'prop-types';

const DataRowComponent = props => {
  const { rowData, links, rowClicked, idx, newTitle, spaced } = props;

  return links ? (
    <div onClick={() => rowClicked(links, idx)} className="row odds">
      {rowData.map((item, i) => {
        return <div className="item">{item}</div>;
      })}
    </div>
  ) : (
    <div className={`row ${newTitle ? 'new-title' : ''} ${spaced ? 'spaced' : ''}`}>
      {rowData.map((item, i) => {
        return <div className="item">{item}</div>;
      })}
    </div>
  );
};

DataRowComponent.propTypes = {
  starSystems: PropTypes.array,
  onMount: PropTypes.func
};

DataRowComponent.defaultProps = {};
export default DataRowComponent;
