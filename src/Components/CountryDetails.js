import React, { useState, useEffect } from 'react'
import SearchHook from "./SearchHook"
import styled from "styled-components"
const DivCountryDetails = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 10em;
img{
  object-fit: contain;
}


.desc{
  margin-top: 2em;
  font-size: .9em;
  font-weight: 300;
}
.desc > span{
  font-weight: 600;
  font-size: 1em;
}
.ppal-information{
  padding-bottom: 2em;
}

`

function CountryDetails({ params }) {

  const { keyword } = params
  const [flags, setFlags] = useState([]);
  const [result, setResult] = useState(false);

  useEffect(function () {
    SearchHook({ keyword })
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
    <DivCountryDetails>
      {

        flags.map(({ name, region, population, capital, flag, numericCode, nativeName, subregion, topLevelDomain, languages, currencies}) => (
          <div key={numericCode}>
            <img src={flag} width="100%" alt={name} />
            <div className="ppal-information">
              <p className="title">
                <span>{name}</span></p>
              <p className="desc">
                <span>Native Name: </span>{nativeName}
              </p>
              <p className="desc">
                <span>Population: </span>{population}
              </p>
              <p className="desc">
                <span>Region: </span>{region}
              </p>
              <p className="desc">
                <span>Sub Region: </span>{subregion}
              </p>
            </div>
            <div className="sec-information">

              <p className="desc">
                <span>Top Level Domain: </span>{topLevelDomain}
              </p>
              <p className="desc">
                <span>Currencies: </span>
              </p>
              {
                console.log({ currencies })
              }
         {/*      {
                languages.map(({name, nativeName}) => <span key={nativeName}>{nativeName}</span>)
              } */}
            </div>
          </div>

        ))
      }
    </DivCountryDetails>
  )
}


export default CountryDetails;
