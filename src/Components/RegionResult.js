import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import getRegions from './getRegions'
import Country from "./Country.js";
import NoResults from "./NoResults"
import Search from "./Search";
const RegionResultStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--VeryLightGray);
  padding: 7em 2em;
`;


function RegionResult({ params }) {
    
  
  const { keyword } = params
  const [flags, setFlags] = useState([]);
  const [result, setResult] = useState(false);

  useEffect(function () {
    getRegions({ keyword })
      .then(flags => {
       
          setFlags(flags)
          setResult(false)
      
      })
  }, [keyword]);
  return (
    <Fragment>
      <Search/>
    <RegionResultStyled>
      {

        result ? <NoResults /> : flags.map(({ name, region, population, capital, flag, numericCode }) => <Country key={numericCode} flag={flag} population={population} region={region} name={name} capital={capital} />)
      }
    </RegionResultStyled>
    </Fragment>
  )
}


export default RegionResult
