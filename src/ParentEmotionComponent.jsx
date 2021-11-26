import styled from '@emotion/styled'
import EmotionComponent from "./EmotionComponent";

const StyledEmotionComponent = styled(EmotionComponent)`
  /* any styles that all variants should share */
  background-color: red;
  display: flex;
  
  ${props => props.variant === 'italic' && `font-weight: italic`};
`;

const ParentEmotionComponent = ({ variant }) => {
  return (
    <StyledEmotionComponent variant={variant} />
  )
}

export default ParentEmotionComponent
