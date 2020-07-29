import React, { useState, useEffect } from 'react'
import SearchHook from "./SearchHook"
import styled from "styled-components"
import BtnBack from "./BtnBack";

const DivCountryDetails = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 3em;
img{
  object-fit: contain;
  
  box-shadow: 0px 0px 10px #1b272b38;
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
  font-size: 1.4em;
}
.item-language::after{
  content:", "

}
.item-language:last-child::after{
  display:none;
}
  .borders{
  .container-items{
      display: grid;
      align-items: center;
        .items-grid{
          display: flex;
          flex-wrap: wrap;
            .border-item{
              padding: 1em 1.5em;
              margin: .3em;
              background-color: var(--headerColor);
              box-shadow: 0px 0px 10px #1b272b38;
            }
        }  
    }
  }
 p.desc > span{
  font-weight: 700;
 }
 #lang{
  font-weight: 300 !important;
}
@media screen and (min-width: 540px){
  font-size: 120%;
  
}
@media screen and (min-width: 1000px){
  font-size: 105%;
  h3, p, h2{
    padding: 0 !important;
    margin: 0 !important;
  }
  p{
      margin: .3em 0 !important;
  }
  .container-details{
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-column-gap: 4em;
    align-items: center;
  } 
  .ppal-information{
      margin-top: 1em;
      margin-bottom: 0 !important;
  }
  .sec-information{
    margin-top: -1em;
  }
  img{
    width: 100%;
    height: auto;
    display: block;
  }
  .borders{
  .container-items{
        .items-grid{
          margin-left: -.4em;
            .border-item{
              padding: .1em 1em;
             
            }
        }  
    }
  }
  h3{
    font-size: 1em;
  }
  
  .ppal-information{
      margin-top: 1em !important;
  }
}

@media screen and (min-width: 1200px){
  font-size: 100%;
  .container-details{
    grid-template-columns: 500px 1fr;
    grid-column-gap: 6em;
  } 
  .ppal-information{
      margin-top: 0em !important;
  }
  h2{
    padding-bottom: 1em !important;
  }
}
  @media screen and (min-width: 1440px){
    .colum2{
   
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto ;
      grid-template-areas: 
        "area1 area2"
        "area3 area3"
    }
    .ppal-information{
      grid-area: area1;
      height: 180px;
    }
    .sec-information{
      padding-top: 5em;
      grid-area: area2;
      height: 140px;
    }
    .container-details{
      grid-template-columns: 500px 1fr;
      grid-column-gap: 7em;
    } 
    img{
      width: 100%;
    }
    p{
      margin: .5em 0 !important;
    }
    .ppal-information, .sec-information{
      margin-top: 2em;
    }
    h2{
      font-size: 1.7em;
      margin: 1em 0 !important;
    }
    h3{
      font-size: 1em;
      font-weight: 700;
    }
  .borders{
    grid-area: area3;
  .container-items{
      align-items: center;
        .items-grid{
            .border-item{
              padding: .3em 1.6em;
            }
        }  
    }
  }
  
}
@media screen and (min-width: 1600px){
  font-size: 120%;
  .container-details{
    grid-template-columns: 600px 1fr;
  } 
  .ppal-information, .sec-information{
      margin-top: 4em;
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
      <DivCountryDetails className="cards-grid grid">

        {

          flags.map(({ name, region, population, capital, flag, numericCode, nativeName, subregion, topLevelDomain, languages, currencies, borders }) => (
            <div className="container-details" key={numericCode}>
              <img src={flag} width="100%" alt={name} />
              <div className="colum2">

                <div className="ppal-information">
                  <h2>{name}</h2>
                  <p className="desc">
                    <span>Native Name: </span>{nativeName}
                  </p>
                  <p className="desc">
                    <span>Population: </span>
                    {
                      new Intl.NumberFormat("en-EN").format(population)
                    }
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
                      languages.map(({ name }) => <span className="item-language" id ="lang" key={name}>{name}</span>)
                    }
                  </p>

                </div>

                <div className="borders">
                  <div className="container-items">
                    <h3>Border Countries:</h3>
                    <div className="items-grid">
                      {
                        borders.map((border, index) => <span className="border-item" key={index}>{border}
                        </span>)
                      }
                    </div>
                  </div>
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
