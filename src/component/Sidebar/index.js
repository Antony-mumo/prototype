import React from "react";
import { Fade, Flip } from "react-reveal";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Fade top cascade>
            <SidebarLink to='services' onClick={toggle}>
              <Flip top cascade>
                Services
              </Flip>
            </SidebarLink>
            <SidebarLink to='portfolio' onClick={toggle}>
              <Flip top delay='100' cascade>
                Portfolio
              </Flip>
            </SidebarLink>
            <SidebarLink to='skills' onClick={toggle}>
              <Flip top delay='100' cascade>
                Skills
              </Flip>
            </SidebarLink>
            <SidebarLink to='about' onClick={toggle}>
              <Flip top delay='100' cascade>
                About
              </Flip>
            </SidebarLink>
          </Fade>
        </SidebarMenu>
        <SideBtnWrap>
          <Flip top delay='100' cascade>
            <SidebarRoute to='/signup'>Reach Us</SidebarRoute>
          </Flip>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
