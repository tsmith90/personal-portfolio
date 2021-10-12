import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,  SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about-me" onClick={toggle}>About Me</SidebarLink>
                    <SidebarLink to="blog" onClick={toggle}>Blog</SidebarLink>
                    <SidebarLink to="leetcode" onClick={toggle}>Leetcode</SidebarLink>
                    <SidebarLink to="resume" onClick={toggle}>Resume</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
