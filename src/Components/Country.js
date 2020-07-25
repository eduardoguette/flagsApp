import React from "react";
import styled from "styled-components";


const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  background-color: var(--ColorCads);
  box-shadow: 0 0 7px 2px var(--shadow);
  overflow: hidden;
  img {
    height: 160px;
    width: 100%;
    object-fit: cover;
  }
  .details {
    padding: 1.5em;
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 800;
  }
  p {
    margin: 0;
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
`;

function Country({ flag, population, region, name, capital, numericCode }) {
  return (
    <CountryStyled >
      <a href={`/country/${name}`}>

      <img loading="lazy" height="160" src={flag} alt={name} />
      </a>
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </CountryStyled>
  );
}
export default Country;
