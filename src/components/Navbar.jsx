import React from 'react'
import { NavContainer, StyledLink } from '../Styled-Component/NavbarStyle'

const Navbar = () => {
  return (
    <NavContainer>
        <h2>Hola mundo</h2>
        <div>
            <StyledLink to="/" spy={true} smooth={true} offset={50} duration={500}>Inicio</StyledLink>
            <StyledLink to="About" spy={true} smooth={true} offset={50} duration={500}>Curiosidad</StyledLink>
            <StyledLink to="Contact" spy={true} smooth={true} offset={50} duration={500}>Mundo</StyledLink>
        </div>
      </NavContainer>
  )
}

export default Navbar