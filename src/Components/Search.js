import React, { useState } from 'react';
import { useLocation } from "wouter";
import styled from 'styled-components';

const DivSearch = styled.div`
  display: grid;
  grid-row-gap: 2em;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  input {
  display: block;
  margin: auto;
  padding: 0 1em;
  height: 60px;
  width: 240px;
  border-radius: 10px;
  border: none;
  font-family: inherit;
  font-size: .9em;
  color: var(--VeryDarkBlueLightModeT);
  background-color: var(--ColorCads);
  font-weight: 600;
  padding-left: 6em;
  margin: auto;
  }
  ::before {
    content: "search";
    font-family: "Material Icons";
    position: absolute;
    z-index: 1;
    color: var(--VeryDarkBlueLightModeT);
    left: 40px;
    top: 4.4em;
    font-size: 1.6em;
    width: 20px;
  }
  input::placeholder {
    font-weight: 300;
    color: var(--VeryDarkBlueLightModeT);

  }

  ul {
 
    padding: 0;
    margin: 0;
    list-style: none;
    cursor: pointer;
    width: 220px;
    margin-left: 1em;
    position: absolute;
    border-radius: 7px;
    
  }
  ul > li {
    font-size: 0.9em;
    background-color: var(--ColorCads);
    padding-left: 2em ;
    padding-top: .6em ;
    font-family: var(--nunito);
  }
  ul > li:not(.list-first) {
    display: none;
    position: relative;
    top: 1em;
    background-color: var(--ColorCads);
  }
  ul > li.list-first {
    border-radius: 7px;
    padding-top: 1em;
    padding-bottom: 1em;
  }
  ul > li.list-first::after {
    content: "keyboard_arrow_down";
    font-family: "Material Icons";
    position: absolute;
    left: 13em;
    top: 1.2em;
    font-weight: bold;
    font-size: 1em;
  }



  ul > li:nth-child(2) {
    border-radius: 7px 7px 0 0;

    padding-top: 1.5em ;
  }
  ul > li:last-child {
    border-radius: 0 0 7px 7px;
    padding-bottom: 1.5em ;
  }
  option{

    position: absolute;
    top: 10em;
  }

`


function Search() {
  // eslint-disable-next-line
  const [keyword, setkeyword] = useState(''); // eslint-disable-next-line
  const [path, pushLocation] = useLocation();
  // eslint-disable-next-line
  const [option, setOpt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      pushLocation(`/search/${e.target.value}`)
    }
  }
  const handleOption = (e) => {
    if (e.target.className === "list-first" || e.target.className === "opt-sel") {
      document.querySelectorAll('ul > li:not(.list-first)').forEach(elem => {
        if (elem.style.display !== "block")
          elem.style.display = "block"
        else
          elem.style.display = "none"
      })
      if (e.target.className === "opt-sel") {
        document.querySelector('.list-first').innerHTML = e.target.innerHTML;
      }


    }
    var ind = e.target.textContent;
    if (e.target.textContent !== "Filter by Region" && e.target.className === "opt-sel") {
      setOpt(ind)
      pushLocation(`/region/${ind}`)
    } else if(e.target.className === "opt-sel"){
      pushLocation(`/`)
    }

  }

  const regions = ["Filter by Region", "Africa", "Americas", "Asia", "Europe", "Oceania"]
  return (
    <DivSearch>
      <div className="container-form"  >
        <input onKeyUp={handleSubmit} type="text" placeholder="Search for a country..." />
      </div>
      <div className="container-select">
        <ul onClick={handleOption}>
          <li className="list-first" name="filter" >Filter by Region</li>
          {
            regions.map((region, i) => <li className="opt-sel" value={region} key={i}>{region}</li>)
          }

        </ul>
      </div>
    </DivSearch>
  )
}

export default Search
