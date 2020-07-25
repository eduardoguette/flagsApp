import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getRegions from './getRegions'
import Country from "./Country.js";
import NoResults from "./NoResults"
const RegionResultStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--VeryLightGray);
  padding: 4em 2em;
`;


function RegionResult({ params }) {

  const { keyword } = params
  const [flags, setFlags] = useState([]);
  const [result, setResult] = useState(false);

  useEffect(function () {
    getRegions({ keyword })
      .then(flags => {
        if (flags !== undefined) {
          setFlags(flags)

          setResult(false)
        }
        else {
          setResult(true)
        }
      })
  }, [keyword, result]);
  return (
    <RegionResultStyled>
      {

        result ? <NoResults /> : flags.map(({ name, region, population, capital, flag, numericCode }) => <Country key={numericCode} flag={flag} population={population} region={region} name={name} capital={capital} />)
      }
    </RegionResultStyled>
  )
}


export default RegionResult

