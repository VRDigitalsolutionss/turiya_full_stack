import React from 'react'
import logo from "../assets/images/logo.webp";
import { NavLink } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <>
      <div className='thank-you-page'>
        <img className='logo img-fluid' src={logo} alt='logo' />
        <h3>Danke, dass du diesen Weg mit uns gehst.</h3>
        <NavLink className='back-to-home-button' to='/'>Back to Home</NavLink>
      </div>
    </>
  )
}

export default ThankYouPage
