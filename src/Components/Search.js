import React, { useState } from 'react';
import { useLocation } from "wouter";
import styled from 'styled-components';

const DivSearch = styled.div`
  display: grid;
  grid-row-gap: 2em;
  input{
    padding: 1em 1em;
    height: 30px;
  
    margin: auto;
    width: 96%;
    border-radius: 10px;
    border: none;
    font-family: inherit;
    font-size: .9em;

    color: var(--VeryDarkBlueLightModeT);
    background-color: var(--ColorCads);
    font-weight: 600;
  }
  input::placeholder{
    font-weight: 600;
    color: var(--colorPlaceHolder);
    font-size: 1em;
  }
  input:focus{    
    outline: none;
    border: 1px solid #CFE8F1;
  
  }
  select{
    width: auto;
  }
  
`


function Search() {
// eslint-disable-next-line
  const [keyword, setkeyword] = useState(''); // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    if(e.keyCode === 13){
    /* 
    setkeyword(e.target.previousElementSibling.value) */
    pushLocation(`/country/${e.target.value}`)
    }
  }
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"]
  return (
    <DivSearch>
      <div className="container-form">
          <input onKeyUp={handleSubmit} type="text" placeholder="Search for a country..." />
      </div>
      <div className="container-select">
        <select>
          <option>Filter by Region</option>
          {
            regions.map((region, i) => <option className="opt-sel" value={i} key={i}>{region}</option>)
          }
        </select>
      </div>
    </DivSearch>
  )
}

export default Search
