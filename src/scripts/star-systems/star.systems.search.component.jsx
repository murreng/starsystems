import React, { useEffect, useState, useCallback } from 'react';
import '../../css/home.css';
import DataRowComponent from '../common/data.row.component';
import PagingComponent from '../common/paging.component';
import PropTypes from 'prop-types';

const StarSystemsListComponent = props => {

  const {
    searchStarAltNames,
    paging,
    linkList,
    setChosenSystem,
    getSearchStarAltNames
  } = props;

  const [searchSystem, setSearchSystem] = useState('');

  const url = 'http://webdevelopertest.playfusionservices.com/webapptest';
  const sizeSort = 'size=10&';
  const searchAlternateNames = '/alternateNames/search/findByNameLike?name=';

  
if(!searchStarAltNames || !paging || !linkList)
{
  return <div></div>
}

const firstClicked =() => {
  if(first)getSearchStarAltNames(first.href);
}

const previousClicked =() => {
  if(prev)getSearchStarAltNames(prev.href);
}

const nextClicked =() => {
  if(next)getSearchStarAltNames(next.href);
}

const lastClicked =() => {
  if(last)getSearchStarAltNames(last.href);
}

const rowClicked =(links, idx) => {

}

const searchBySystemLike = () => {
  getSearchStarAltNames(`${url}${searchAlternateNames}${searchSystem}&${sizeSort}`);
}

const onSearchChange = (e) =>{
  if (e.target.value !== "" ) {
    setSearchSystem(`%25${e.target.value}%25`);
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
        <div className="star-systems-title">Search options</div>
        <div className="search-container">
          <span>Search for star system by name like</span>
          <input className="num-input"  onChange={onSearchChange} />
          <button onClick={() => searchBySystemLike()}>Search</button>
        </div>
        </div>
        <div className="page-number">{`Page ${number + 1} of ${totalPages}`}</div>
        <div className="tables">
        {DataRowComponent({rowData:['Name'], links:null, spaced:true})}
        {searchStarAltNames.map((system, idx) => 
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
