import React, { useEffect, Fragment, useCallback } from 'react';
import '../../css/home.css';
import DataRowComponent from '../common/data.row.component';
import PagingComponent from '../common/paging.component';
import PropTypes from 'prop-types';

const StarSystemsListComponent = props => {

  const {
    starSystems,
    paging,
    linkList,
    onMount,
    getNewPage,
    getSystemPlanets,
    getStarAltNames,
    setChosenSystem
  } = props;

useEffect(() => {
  mountCallBack();
}, [mountCallBack]);

  const mountCallBack = useCallback(() => {
    onMount();
  },[onMount]);


  
if(!starSystems || !paging || !linkList)
{
  return <div>hrhhrhrhr</div>
}

const firstClicked =() => {
  if(first)getNewPage(first);
}

const previousClicked =() => {
  if(prev)getNewPage(prev);
}

const nextClicked =() => {
  if(next)getNewPage(next);
}

const lastClicked =() => {
  if(last)getNewPage(last);
}

const rowClicked =(links, idx) => {
  getSystemPlanets(links.planets.href);
  getStarAltNames(links.additionalNames.href);
  setChosenSystem(links.self.href)
}

const {paging: {
  totalPages, 
  number
},
linkList:
{first, last, prev, next}
} = props;

const firstPage = number === 0;
const lastPage = number === totalPages-1;

  return (
    <div className="star-systems-list-container tables">
        <div className="home-title">Star Systems List</div>
  <div>{`Page ${number + 1} of ${totalPages}`}</div>
        {DataRowComponent({rowData:['Name', 'Distance from Earth', 'Number of Planets'], links:null})}
        {starSystems.map((system, idx) => 
      {
        return DataRowComponent({rowData:Object.keys(system.rowData).map(val => system.rowData[val]), links:system._links, rowClicked, idx})
      })}
      {PagingComponent({firstClicked, previousClicked, nextClicked, lastClicked, firstPage, lastPage})}
    </div>
  );
};

StarSystemsListComponent.propTypes = {
    starSystems:PropTypes.array,
    onMount: PropTypes.func
};

StarSystemsListComponent.defaultProps = {};
export default StarSystemsListComponent;
