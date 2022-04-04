import React from 'react'
import Logo from "../../../src/assets/images/tesodev-logo.png"
import { Link } from "react-router-dom";

function ResultHeader() {
  return (

    <Link to="/">
      <img className='result-header-logo' src={Logo} alt="Tesodev-Logo" />
    </Link>

  )
}

export default ResultHeader