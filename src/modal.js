import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

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
    <form ref={form} action="" onSubmit={(handleSubmit)}>
      <h2>Search any user</h2>
     <input type="text" name="username" placeholder="Username"/> 
     <button>Buscar</button>
    </form>
  )
}

export default ModalContent