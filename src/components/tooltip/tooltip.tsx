import React, { useState } from 'react'
import {
  Container,
  TooltipText
} from './tooltip.styled'

interface ToolTipProps {
  text: String;
  showTooltip: boolean;
}

const Tooltip: React.FC<ToolTipProps> = ({ text, showTooltip }) => {
  console.log(showTooltip, '---------')
  
  return (
    <>
      {showTooltip && (
        <Container>
          <TooltipText>
            {text}
          </TooltipText>
        </Container>
      )}
    </>
  )
}

export default Tooltip