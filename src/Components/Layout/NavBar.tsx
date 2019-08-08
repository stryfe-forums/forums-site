import React from 'react';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import Logo from '../../Assets/Images/Logo.png';

const NavBar = ({ dark, loggedIn, tag }: NavBarProps) => (
  <>
    <Navbar dark={dark} expand='md'>
      <NavbarBrand href='/'>
        <img src={Logo} alt='Stryfe' />
      </NavbarBrand>

      <Nav navbar className='mr-auto'>
        <NavItem>
          <NavLink href='/'>home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/forums'>forums</NavLink>
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
