import React from "react";
import styled from "styled-components";
import { Link } from "wouter"
const CountryStyled = styled.div`
/*   margin-top: 1em; */
  width: 264px;
  text-align: left;
  border-radius: 5px;
  background-color: var(--ColorCads);
  box-shadow: 0 0 7px 2px var(--shadow);
  overflow: hidden;
  margin: 0 1em;
  img {
    height: 160px;
    width: 100%;
    object-fit: cover;
  }
  img:hover{
    cursor:pointer;
  }
  :hover{
    box-shadow: 0px 0px 20px #1b272b38;
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
  const popu = new Intl.NumberFormat("en-EN").format(population)
  return (
    
    <CountryStyled >
      <Link to={`/details/${name}`}>

        <img loading="lazy" height="160" src={flag} alt={name} />
      </Link>
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population: </strong>
          {popu}
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
