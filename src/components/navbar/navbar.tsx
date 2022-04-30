import React from 'react'
import Logo from './../../images/logo_gmail_lockup_default_2x_r2.png'
import {
  Menu,
  Search,
  Tune,
  ArrowDropDown,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsRounded
} from '@mui/icons-material'

import {
  Wrapper,
  Input,
  StyledInput,
  ActiveState,
  Image,
  IconWrapper
  // Line 
} from './navbar.styled'


const Navbar = () => {
  return (

    <Wrapper>
      <IconWrapper hasHover>
        <Menu />
      </IconWrapper>
      <Image src={Logo} alt="logo" />

      <StyledInput>
        <Input placeholder='Search all conversations' />
        <IconWrapper hasHover left={0}>
          <Search />
        </IconWrapper>
        <IconWrapper hasHover right={0}>
          <Tune />
        </IconWrapper>

      </StyledInput>

      <ActiveState>
        Active
        <ArrowDropDown />
      </ActiveState>

      <IconWrapper hasHover>
        <HelpOutlineOutlined />
      </IconWrapper>
      <IconWrapper hasHover>
        <SettingsOutlined />
      </IconWrapper>
      <IconWrapper hasHover>
        <AppsRounded />
      </IconWrapper>
      {/* <Line /> */}
    </Wrapper>
  )
}

export default Navbar