import React from 'react'
import styled from "styled-components"
const DivDetails = styled.div`
  color: var(--VeryDarkBlueLightModeT);
  .btn-back{
    border-radius: 3px;
    position: absolute;
    margin: 1em 0 0 4em;
    text-decoration: none;
    height: 40px;
    width: calc(120px);
    background-color: var(--headerColor);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .9em;
    font-weight: 300;
  }
  a{
    text-align: center;
  }
  a:before{
    content: "keyboard_backspace";
    font-family: 'Material Icons';
    font-weight: 500;
    position: relative;
    top: .1em;
    margin-right: 1em;
    font-size: 1.2em;
  }
  a:visited{
    color: var(--VeryDarkBlueLightModeT);
  }

`

function Details({ flag, population, region, name, capital, numericCode }) {
  console.log(population)
  return (
    <DivDetails>
      <div className="btn-back">
        <a href="/">Back</a>
      </div>
   
    </DivDetails>
  )
}

export default Details;