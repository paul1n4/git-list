import { isValidElement } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  border-radius: .5rem;
  padding-block: .25rem;
  background: var(--buttonBG);
  color: var(--white);
  font: var(--button);
  border: 1px solid var(--grey);
  min-inline-size: 135px;
  display: inline-flex;
  gap: .5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none !important;
  &:hover {
    background: var(--white);
    color: var(--buttonBG);
  }
`

function Button({ text, link, className, icon }) {
  const component = link ? 'a' : 'button'
  let IconComponent = null 
  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon
    }
  }
  return (
    <ButtonStyled as={component} href={link} className={className}>
      {IconComponent}
      {text}
    </ButtonStyled>
  )
}

export const ButtonContrast = styled(Button)`
  background:  var(--white);
  color: var(--buttonBG);
  &:hover {
    background:  var(--buttonBG);
    color: var(--white);
  }
`
export const ButtonRounded = styled(Button)`
  min-inline-size: initial;
  border-radius: 50%;
  padding: .75rem;
  border: 2px solid var(--grey);
  &:hover {
    background:  var(--buttonBG);
    transform: scale(1.1);
  }
`

export default Button
