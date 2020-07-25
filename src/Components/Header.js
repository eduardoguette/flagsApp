import React, { useState } from 'react'
import styled from "styled-components"


const DivHeader = styled.div`
  height: 70px;
  width: auto;
  font-size: .8em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2em;
  background-color: var(--headerColor);
  box-shadow: 2px 0px 5px var(--shadow);
  .header{
  color: var(--VeryDarkBlueDarkModeBg);
  padding: 0 1em;
  display: flex;
  width: 100%;
  justify-content: space-between;
  }
  i{
  margin: 0 .5em;
  transform: rotate(-30deg);
  }
  .dark-light{
    display: flex;
    align-items: center;
    margin-right: .5em;
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: var(--VeryDarkBlueDarkModeBg);
  }
`



export default function Header() {

  const [darkMode, setDarkMode] = useState(false)
  const handleClick = (e) => {
    document.body.classList.toggle('is-dark-mode')
    if (!darkMode)
      setDarkMode(true)
    else
      setDarkMode(false)

  }

  return (
    <DivHeader>
      <div className="header">
        <div>
          <a href="/">Where in the world?</a>
        </div>
        <div className="dark-light" onClick={handleClick}>
          {
            darkMode ? <i className="fas fa-moon"></i> : <i className="far fa-moon"></i>
          }
          <strong>DarkMode</strong>
        </div>
      </div>
    </DivHeader>
  )
}
