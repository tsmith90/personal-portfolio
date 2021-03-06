import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Home</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars /> 
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about-me'>About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='blog'>Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='leetcode'>Leetcode</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='resume'>Resume</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
