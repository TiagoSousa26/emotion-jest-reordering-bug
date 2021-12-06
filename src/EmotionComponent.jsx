import styled from '@emotion/styled'

const StyledTypography = styled.p`
  /* any styles that all variants should share */
  padding: 0;
  margin: 0;
  font-size: 18px;
  background-color: hotpink;

  ${props => props.variant === 'bold' && `font-weight: bold`};
  
  :first-of-type {
    font-weight: bold;
  }

  :hover {
    background-color: green;
  }

  @media (min-width: 48em) {
    font-size: 12px;
    background: purple;
  }
`

// 3 different ways to use Emotion CSS-in-JS
const EmotionComponent = ({ variant, className }) => {
  return (
    <StyledTypography className={className} variant={variant}>Some Text {variant}</StyledTypography>
  )
}

export default EmotionComponent
