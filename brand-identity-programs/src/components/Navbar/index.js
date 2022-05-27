import React from 'react';
import {
  Nav,
  NavLink,
//   Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            {/* <Bars /> */}
            <NavMenu>
                <NavLink exact to='/'>
                    Domů
                </NavLink>
                <NavLink to='/programs'>
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