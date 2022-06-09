import React from 'react';
import {
  Nav,
  NavLink,
//   Bars,
  NavMenu,
  NavLinkHome
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            {/* <Bars /> */}
            <NavMenu>
                <NavLinkHome exact to='/'>
                    Domů
                </NavLinkHome>
                <NavLink to='/programs-comparison '>
                    Programy
                </NavLink>
                <NavLink to='/interviews'>
                    Rozhovory
                </NavLink>
                <NavLink to='/links'>
                    Zdroje
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};
  
export default Navbar;