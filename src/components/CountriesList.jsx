import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  
  return (
    <div className="list-group-item list-group-item-action">
      {
        <Link to={props.CountriesList.alpha3Code}>
          {props.CountriesList.name} 
        </Link>
      }
      <img
        src={`https://flagpedia.net/data/flags/w580/${props.CountriesList.alpha2Code.toLowerCase()}.png`}
        alt=""
        width="100px"
        height="auto"
      />
    </div>
    
  );
}

export default CountriesList;
