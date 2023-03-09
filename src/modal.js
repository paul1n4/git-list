import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Overlay from './Overlay'
import styled from 'styled-components'
import { ButtonContrast } from './components/Button'
import InputText from './components/Input-text'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.name = 'asdgteb'
  }
  state = {
    a:'Miguel'
  }
  componentDidUpdate() {
    console.log('el componente se actualizó');
  }
  componentWillUnmount() {
    console.log('el componente está a punto de desaparcer');
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        a: 'Leo',
        b: this.name
      })
    }, 5000)
  }
  render() {
    return (
      <div style={{ background: 'black'}}>
        {this.state.a}
        {this.state.b}
        miau
      </div>
    )
  }
}

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
  console.log({form});
  const [isActive, setIsActive] = useState(true)

  function handleSubmit(event) {
    setIsActive(false)
    event.preventDefault()
    const formData = new FormData(form.current)
    navigator(`/${formData.get('username')}`)
  }

  return (
    <Overlay>
      {
        isActive ? <Modal /> : null
      }
      
      <ModalContentStyled ref={form} action="" onSubmit={(handleSubmit)}>
        <h2 className='title'>Search any user</h2>
        <InputText type="text" autoComplete='off' name="username" placeholder="Username"/> 
        <ButtonContrast text="Buscar"/>
      </ModalContentStyled>
    </Overlay>
  )
}

export default ModalContent