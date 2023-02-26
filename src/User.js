import { useState } from "react"
import styled from "styled-components"

const Avatar = styled.img`
  border: 10px solid black;
`

function User({color, name, avatar, counter}){
  const [calculatedName, setCalculatedName] = useState(name)

  const newName = `${calculatedName} es genial`

  function onClick() {
    setCalculatedName('Pikachu')
    
    console.log(`hola ${name}, este es el click # ${counter}`);
  }

  return (
    <div className="User" onClick={onClick}>
      <Avatar src={avatar} title={name} alt={name} width="200"/>
      <p>Hemos dado click en {newName} por {counter} veces</p>
    </div>
  )
}

export default User