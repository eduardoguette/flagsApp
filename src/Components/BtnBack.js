import React from "react";
import styled from "styled-components";
import { Link } from "wouter";

import { connect } from "react-redux";
const DivDetails = styled.div`
  color: var(--VeryDarkBlueLightModeT);
  .btn-back {
    border-radius: 3px;
    margin: 1em 0 0 2em;
    text-decoration: none;
    height: 40px;
    width: calc(120px);
    background-color: var(--headerColor);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
    font-weight: 300;
    box-shadow: 0px 0px 10px #1b272b38;
  }
  a {
    text-align: center;
  }
  a:before {
    content: "keyboard_backspace";
    font-family: "Material Icons";
    font-weight: 500;
    position: relative;
    top: 0.1em;
    margin-right: 1em;
    font-size: 1.2em;
  }
  a:visited {
    color: var(--VeryDarkBlueLightModeT);
  }
  @media screen and (min-width: 720px) {
    width: 50%;
    margin: 0 1.5em;
  }
  @media screen and (min-width: 900px) {
    margin: 0 2.5em;
  }
  @media screen and (min-width: 1024px) {
    margin: 0 3em;
  }
  @media screen and (min-width: 1200px) {
    margin: 0 3.5em;
  }
  @media screen and (min-width: 1200px) {
    margin: 0 4em;
  }
`;

function Details({ busqueda,banderaSelec }) {
  console.log(busqueda);
  return (
    <DivDetails>
      <div className="btn-back">
        <Link to="/" onClick={() => banderaSelec("")}>
          Back
        </Link>
      </div>
    </DivDetails>
  );
}

const mapStateToProps = (state) => ({
  banderas: state.banderas,
  bandera: state.bandera,
});
const mapDispatchToProps = (dispatch) => ({
  banderaSelec(busqueda) {
    dispatch({
      type: "NUEVA_BUSQUEDA",
      busqueda,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Details);
