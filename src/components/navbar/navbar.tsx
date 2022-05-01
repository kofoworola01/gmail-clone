import React, {useState } from 'react'
import Logo from './../../images/logo_gmail_lockup_default_2x_r2.png'
import Tooltip from '../tooltip/tooltip'
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

  const [showTooltip, setShowTooltip] = useState(false)

  const handleTooltipVisibility = () => {
    setShowTooltip(true)
    console.log('here')
  }
  console.log(showTooltip, 'showTooltip')
  
  return (

    <Wrapper >
      <IconWrapper hasHover>
        <Menu />
      </IconWrapper>
      <Image src={Logo} alt="logo" />

      <StyledInput>
        <Input placeholder='Search all conversations' />
        <IconWrapper hasHover left={0}>
          <Tooltip text='Search' showTooltip={showTooltip} />
          <Search onMouseOver={handleTooltipVisibility} 
          onMouseLeave={() => setShowTooltip(false)} />       
         </IconWrapper>
        <IconWrapper hasHover right={0}>
          {/* <Tooltip text='Show Search Options' showTooltip={showTooltip} /> */}
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
      {/* <div onClick={showTooltip}>
        kofo
      </div> */}
    </Wrapper>
  )
}

export default Navbar