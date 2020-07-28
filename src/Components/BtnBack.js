import React from 'react'
import styled from "styled-components"
import { Link } from "wouter"

const DivDetails = styled.div`
  color: var(--VeryDarkBlueLightModeT);
  .btn-back{
    border-radius: 3px;
    position: absolute;
    margin: 1em 0 0 2em;
    text-decoration: none;
    height: 40px;
    width: calc(120px);
    background-color: var(--headerColor);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .9em;
    font-weight: 300;
    box-shadow: 0px 0px 10px #1B272B;
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

function Details() {
  return (
    <DivDetails>
      <div className="btn-back">
        <Link to="/">Back</Link>
      </div>

    </DivDetails>
  )
}

export default Details;