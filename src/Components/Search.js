import React, { useState } from 'react';
import { useLocation } from "wouter";
import styled from 'styled-components';

const DivSearch = styled.div`
  display: grid;
  grid-row-gap: 2em;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  input{
    display:block;
    margin: auto;
    padding: 0 1em;
    height: 60px;
    width: calc(80% - 2em);
    border-radius: 10px;
    border: none;
    font-family: inherit;
    font-size: 1.1em;
    color: var(--VeryDarkBlueLightModeT);
    background-color: var(--ColorCads);
    font-weight: 600;
    position: relative;
    padding-left: 5em;
    position: sticky;
  } 
  ::before{
    content: "search";
    font-family: "Material Icons";
    position: relative;
    z-index: 1;
    color: white;
    left: 70px;
    top: 2.7em;
    font-size: 1.8em;
    width: 20px;
  }
  input::placeholder{
    font-weight: 600;
    color: var(--colorPlaceHolder);
    font-size: 1em;
    padding-left: 0em;
  }
  input::selection{
    content: none;
  }
  input:focus{    
    outline: none;
    border: 1px solid #CFE8F1;
    content: "search";
  }

  select{
    margin: 0 3em;
    width: 200px;
    height: 50px;
    outline:0px;
    border-radius: 5px;
    padding: 0 0 0 1em;
    border: none;
    color: var(--VeryDarkBlueLightModeT);
    background-color: var(--ColorCads);
    font-family: var(--nunito);
  }
  select > option{
   
    border-radius: 5px;
    
  }
  
`


function Search() {
// eslint-disable-next-line
  const [keyword, setkeyword] = useState(''); // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  const [option, setOpt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.keyCode === 13){
    /* 
    setkeyword(e.target.previousElementSibling.value) */
    pushLocation(`/country/${e.target.value}`)
    }
  }
  const handleSearch = (e) => {
    var ind = e.target.selectedIndex
    if(ind > 0){
      setOpt(document.querySelectorAll('select option')[ind].value)
      
      console.log(ind)
      pushLocation(`/region/${e.target.value}`)
    }
  }

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  return (
    <DivSearch>
      <div className="container-form"  >
          <input onKeyUp={handleSubmit} type="text" placeholder="Search for a country..." />
      </div>
      <div className="container-select">
        <select onClick={handleSearch}>
          <option>Filter by Region</option>
          {
            regions.map((region, i) => <option className="opt-sel"  value={region} key={i}>{region}</option>)
          }
        </select>
      </div>
    </DivSearch>
  )
}

export default Search
