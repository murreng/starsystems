import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/tables.css';
import PropTypes from 'prop-types';

const PagingComponent = props => {

  const {
    firstPage,
    lastPage,
    firstClicked,
    lastClicked,
    previousClicked,
    nextClicked
  } = props;

 
  return (
    <div className="paging-container">
      <div className={`paging-item ${firstPage? 'disabled':''}`} disabled={firstPage} onClick={() => firstClicked()}>First</div>
      <div className={`paging-item ${firstPage? 'disabled':''}`}  disabled={firstPage} onClick={() => previousClicked()}>Previous</div>
      <div className={`paging-item ${lastPage? 'disabled':''}`}  disabled={lastPage} onClick={() => nextClicked()}>Next</div>
      <div className={`paging-item ${lastPage? 'disabled':''}`}  disabled={lastPage} onClick={() => lastClicked()}>Last</div>
    </div>
  );
};

PagingComponent.propTypes = {
  first: PropTypes.func,
  last: PropTypes.func,
  previous: PropTypes.func,
  next: PropTypes.func
};

PagingComponent.defaultProps = {};
export default PagingComponent;
