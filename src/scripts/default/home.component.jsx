import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/home.css';
import PropTypes from 'prop-types';

const HomeComponent = props => {

  const {
    onMount
  } = props;

useEffect(() => {
  mountCallBack();
}, [mountCallBack]);

  const mountCallBack = useCallback(() => {
    onMount();
  },[onMount]);
  
  return (
    <div>
      <div className="home-title">Crypto App</div>
    </div>
  );
};

HomeComponent.propTypes = {
};

HomeComponent.defaultProps = {};
export default HomeComponent;
