import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Overlay from './Overlay'
import styled from 'styled-components'
import { ButtonContrast } from './components/Button'
import InputText from './components/Input-text'

const ModalContentStyled = styled.form`
  background: var(--bg);
  color: var(--white);
  padding: 1.5rem;
  border-radius: .5rem;
  position: fixed;
  inset-block-start: 50%;
  transform: translateY(-50%);
  inset-inline-start: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  inline-size: 24rem;
  .title {
    font: var(--headline2-semi-bold);
    margin: 0;
  }
`

function ModalContent() {
  const form = useRef(null)
  const navigator = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(form.current)
    console.log();
    navigator(`/${formData.get('username')}`)
  }

  return (
    <Overlay>
      <ModalContentStyled ref={form} action="" onSubmit={(handleSubmit)}>
        <h2 className='title'>Search any user</h2>
        <InputText type="text" autoComplete='off' name="username" placeholder="Username"/> 
        <ButtonContrast text="Buscar"/>
      </ModalContentStyled>
    </Overlay>
  )
}

export default ModalContent