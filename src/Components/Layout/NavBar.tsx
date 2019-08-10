import React from 'react';

import { Link } from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import Logo from '../../Assets/Images/Logo.png';

import '../../Styles/NavBar.scss';

import { darkModeColor, navbarLight } from '../App';

const LoggedIn = ({ tag, picture }: { tag: string; picture: string }) => (
  <>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        <img
          src={picture}
          alt='Profile'
          style={{ margin: '10px', width: '20px', height: '20px' }}
        />

        {tag}
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem href={`/u/${tag}`}>My Profile</DropdownItem>
        <DropdownItem divider />
        <DropdownItem href='/logout'>Logout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </>
);

const NavBar = ({ darkMode, isLoggedIn, tag, picture }: NavBarProps) => (
  <>
    <Navbar
      expand='md'
      style={{ backgroundColor: darkMode ? darkModeColor : navbarLight }}
    >
      <NavbarBrand href='/'>
        <img src={Logo} alt='Stryfe' />
      </NavbarBrand>

      <Nav navbar className='mr-auto'>
        <NavItem>
          <NavLink tag={Link} className='navlink' to='/'>
            home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} className='navlink' to='/forums'>
            forums
          </NavLink>
        </NavItem>
      </Nav>
      <Nav className='ml-auto'>
        {isLoggedIn ? (
          <LoggedIn tag={tag} picture={picture} />
        ) : (
          <NavLink
            tag={Link}
            className='navlink'
            to='https://api.stryfe.xyz?redirect=https%3A%2F%2Fstryfe.xyz%2Fcallback'
          >
            login
          </NavLink>
        )}
      </Nav>
    </Navbar>
  </>
);

type NavBarProps = {
  darkMode: boolean;
  isLoggedIn: boolean;
  tag: string;
  picture: string;
};

export { NavBar };
