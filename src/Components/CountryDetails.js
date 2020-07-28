import React, { useState, useEffect } from 'react'
import SearchHook from "./SearchHook"
import styled from "styled-components"
import BtnBack from "./BtnBack";

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
h3{
  font-weight: 400;
  margin-top: 3em;
  font-size: 1.1em;
}
.item-language::after{
  content:", "

}
.item-language:last-child::after{
  display:none;
}
.borders{
  display: flex;
  flex-wrap: wrap;
 & .border-item{
  width: 30px;
  padding: 1em 1.5em;
  margin: .3em;
  background-color: var(--headerColor);
  box-shadow: 0px 0px 10px #1B272B;
 }
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
    <>
      <BtnBack />
      <DivCountryDetails>

        {

          flags.map(({ name, region, population, capital, flag, numericCode, nativeName, subregion, topLevelDomain, languages, currencies, borders }) => (
            <div key={numericCode}>
              <img src={flag} width="100%" alt={name} />
              <div className="ppal-information">
                <p className="title">
                  <span>{name}</span></p>
                <p className="desc">
                  <span>Native Name: </span>{nativeName}
                </p>
                <p className="desc">
                  <span>Population: </span>
                  {population}
                </p>
                <p className="desc">
                  <span>Region: </span>{region}
                </p>
                <p className="desc">
                  <span>Sub Region: </span>{subregion}
                </p>
                <p className="desc">
                  <span>Capital: </span>{capital}
                </p>
              </div>
              <div className="sec-information">

                <p className="desc">
                  <span>Top Level Domain: </span>{topLevelDomain}
                </p>
                <p className="desc">
                  <span>Currencies: </span> {currencies[0].name}
                </p>
                <p className="desc">
                  <span>Languages: </span>
                  {
                    languages.map(({ name }) => <span className="item-language" key={name}>{name}</span>)
                  }
                </p>
                <h3>Border Countries:</h3>
                <div className="borders">
                {
                  borders.map((border, index) => <span className="border-item" key={index}>{border}
                    </span>)
                }
                </div>
               

              </div>
            </div>

          ))
        }
      </DivCountryDetails>
    </>
  )
}


export default CountryDetails;
