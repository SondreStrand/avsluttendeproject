// import React, {useState}from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => { 
  return(
    <>
      <Nav>
        <Bars />

        <NavMenu>
        <NavLink to='/Home' activestyle>
            Home
          </NavLink>
          <NavLink to='/Store' activestyle>
            Store
          </NavLink>
          <NavLink to='/About' activestyle>
            About
          </NavLink>
          <NavLink to='/Contact' activestyle>
            Contact us
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/Shopingcart'>Shoping Cart</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar