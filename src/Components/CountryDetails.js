import React, { useState, useEffect } from "react";
import SearchHook from "./SearchHook";
import styled from "styled-components";
import BtnBack from "./BtnBack";

const DivCountryDetails = styled.div`
  height: 100vh;
  margin: 1em 0.5em;
  img {
    width: 100%;
    height: 200px;
    
    object-fit: cover;
  }
  .desc {
    font-weight: 400;

    span:not(.item-language) {
      font-weight: 600;
    }
  }
  h2 {
    margin: 0;
    margin-top: 2em;
    margin-bottom: -1em;
    font-size: 1.3em;
    font-weight: 800;
  }
  .ppal-information {
    margin: 3em auto;
  }
  .item-language::after {
    content: ", ";
  }
  .item-language:last-child::after {
    display: none;
  }
  .borders {
    margin-top: 2em;
    h3 {
      font-size: 1em;
      font-weight: 500;
    }
    .container-items {
      display: grid;
      .items-grid {
        display: flex;
        flex-wrap: wrap;
        .border-item {
          padding: 0.5em 1.5em;
          margin: 0 0.3em 0.3em 0;
          background-color: var(--headerColor);
          box-shadow: 0px 0px 10px #1b272b38;
          border-radius: 3px;
        }
      }
    }
  }
  @media screen and (min-width: 540px) {
    img {
      height: 260px;
    }
  }
  @media screen and (min-width: 720px) {
    img {
      height: 460px;
    }
    .colum2 {
      display: grid;
      margin-top: 4em;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      h2 {
        grid-column: 1 / 3;
        grid-row: 1;
        margin-top: -2em;
      }
      .ppal-information {
        margin: 0;
        grid-column: 1 / 2;
        grid-row: 1;
      }
      .sec-information {
        grid-column: 2/ 3;
        grid-row: 1;
      }
      .borders {
        width: 170%;
        grid-column: 1 / 2;
        grid-row: 2;
      }
    }
  }
  @media screen and (min-width: 1000px) {
    img {
      height: 280px;
      width: 90%;
    }
    .container-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      .colum2 {
        margin-top: 10em;
        font-size: 70%;
        h2 {
          height: 2.5em;
          font-size: 2em;
        }
        .borders {
          margin-top: 0;
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    img {
      height: 280px;
      width: 80%;
      
    }
  }
  @media screen and (min-width: 1300px) {
    img {
      height: 360px;
      width: 90%;
    }
    .container-details {
      .colum2 {
        margin-top: 17em;
        h2 {
          height: 2.5em;
          font-size: 2em;
        }
        p {
          font-size: 1.3em;
        }

        .borders {
          margin-top: 0;
          .container-items {
            display: flex;
            align-items: center;
            h3 {
              margin-right: 1em;
              font-size: 1.3em;
            }
          }
        }
      }
    }
  }
`;

function CountryDetails({ params }) {
  const { keyword } = params;
  const [flags, setFlags] = useState([]);
  const [result, setResult] = useState(false);
  setTimeout(() => {
    if (!document.querySelector("h2")) {
      document.querySelector('.cards-grid.grid').innerHTML = "404, Not Found!";
    }
  }, 500);
  useEffect(
    function () {
      SearchHook({ keyword }).then((flags) => {
        if (flags !== undefined) {
          setFlags(flags);

          setResult(false);
        } else {
          setResult(true);
        }
      });
    },
    [keyword, result]
  );
  return (
    <>
      <BtnBack />
      <DivCountryDetails className="cards-grid grid">
        {flags.map(({ name, region, population, capital, flag, numericCode, nativeName, subregion, topLevelDomain, languages, currencies, borders }) => (
          <div className="container-details" key={numericCode}>
            <img src={flag} alt={name} />
            <div className="colum2">
              <h2>{name}</h2>
              <div className="ppal-information">
                <p className="desc">
                  <span>Native Name: </span>
                  {nativeName}
                </p>
                <p className="desc">
                  <span>Population: </span>
                  {new Intl.NumberFormat("en-EN").format(population)}
                </p>
                <p className="desc">
                  <span>Region: </span>
                  {region}
                </p>
                <p className="desc">
                  <span>Sub Region: </span>
                  {subregion}
                </p>
                <p className="desc">
                  <span>Capital: </span>
                  {capital}
                </p>
              </div>
              <div className="sec-information">
                <p className="desc">
                  <span>Top Level Domain: </span>
                  {topLevelDomain}
                </p>
                <p className="desc">
                  <span>Currencies: </span> {currencies[0].name}
                </p>
                <p className="desc">
                  <span>Languages: </span>
                  {languages.map(({ name }) => (
                    <span className="item-language" id="lang" key={name}>
                      {name}
                    </span>
                  ))}
                </p>
              </div>

              <div className="borders">
                <div className="container-items">
                  <h3>Border Countries:</h3>
                  <div className="items-grid">
                    {borders.map((border, index) => (
                      <span className="border-item" key={index}>
                        {border}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </DivCountryDetails>
    </>
  );
}

export default CountryDetails;
