import React from 'react'
import styled from '@emotion/styled'

const StyledTypography = styled.p`
  /* any styles that all variants should share */
  padding: 0;
  margin: 0;
  font-size: 18px;
  background-color: hotpink;

  ${props => props.variant === 'bold' && `font-weight: bold`};
`

// 3 different ways to use Emotion CSS-in-JS
const EmotionComponent = ({ variant }) => {
  return (
    <StyledTypography variant={variant} >Some Text</StyledTypography>
  )
}

export default EmotionComponent
