import React from 'react';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import Logo from '../../Assets/Images/Logo.png';

const NavBar = ({ dark, loggedIn, tag }: NavBarProps) => (
  <>
    <Navbar
      color={dark ? 'dark' : 'light'}
      dark={dark}
      light={!dark}
      expand='md'
    >
      <NavbarBrand href='/'>
        <img src={Logo} alt='Stryfe' />
      </NavbarBrand>
      <Nav className='ml-auto' navbar>
        <NavItem>
          <NavLink href='/home'>Home</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </>
);

type NavBarProps = {
  dark: boolean;
  loggedIn?: boolean;
  tag?: string;
};

export { NavBar };
