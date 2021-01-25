import React, { useEffect, useState, useCallback } from 'react';
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
    getStarSystems,
    getSystemPlanets,
    getStarAltNames,
    setChosenSystem
  } = props;

  const [numberOfPlanets, setNumerOfPlanets] = useState(0);
  const [searchSystem, setSearchSystem] = useState('');

  const url = 'http://webdevelopertest.playfusionservices.com/webapptest';
  const stars = '/stars';
  const sizeSort = 'size=25&sort=numberOfPlanets,desc';
  const searchPlanetsGreaterThan = '/search/findByNumberOfPlanetsGreaterThan?';
  const planetsGreaterThan = '&numberOfPlanets=';

useEffect(() => {
  mountCallBack();
}, [mountCallBack]);

  const mountCallBack = useCallback(() => {
    onMount(`${url}${stars}?${sizeSort}`);
  },[onMount]);


  
if(!starSystems || !paging || !linkList)
{
  return <div></div>
}

const firstClicked =() => {
  if(first)getStarSystems(first.href);
}

const previousClicked =() => {
  if(prev)getStarSystems(prev.href);
}

const nextClicked =() => {
  if(next)getStarSystems(next.href);
}

const lastClicked =() => {
  if(last)getStarSystems(last.href);
}

const rowClicked =(links, idx) => {
  getSystemPlanets(links.planets.href);
  getStarAltNames(links.additionalNames.href);
  setChosenSystem(links.self.href)
}

const searchByPlanetsGreaterThan = () => {
  getStarSystems(`${url}${stars}${searchPlanetsGreaterThan}${sizeSort}${planetsGreaterThan}${numberOfPlanets}`);
}

const onFilterChange = (e) =>{
  const re = /^[0-9\b]+$/;
  if (e.target.value === "" || re.test(e.target.value)) {
    setNumerOfPlanets(e.target.value);
  }
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
    <div className="star-systems-list-container">
      <div className="options-container">
        <div className="star-systems-title">Filter options</div>
        <div className="filter-container">
          <span>Filter by stars with planets greater than</span>
          <input className="num-input" type="number" value={numberOfPlanets} onChange={onFilterChange} pattern="^-?[0-9]\d*\.?\d*$" />
          <button onClick={() => searchByPlanetsGreaterThan()}>Filter</button>
        </div>
        </div>
        <div className="page-number">{`Page ${number + 1} of ${totalPages}`}</div>
        <div className="tables">
        {DataRowComponent({rowData:['Name', 'Distance from Earth', 'Number of Planets'], links:null, spaced:true})}
        {starSystems.map((system, idx) => 
      {
        return DataRowComponent({rowData:Object.keys(system.rowData).map(val => system.rowData[val]), links:system._links, rowClicked, idx})
      })}
      {PagingComponent({firstClicked, previousClicked, nextClicked, lastClicked, firstPage, lastPage})}
      </div>
    </div>
  );
};

StarSystemsListComponent.propTypes = {
    starSystems:PropTypes.array,
    onMount: PropTypes.func
};

StarSystemsListComponent.defaultProps = {};
export default StarSystemsListComponent;
