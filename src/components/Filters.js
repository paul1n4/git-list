import styled from 'styled-components'
import Icon from './icon/Index'


const FiltersStyled = styled.div`
  grid-area: filters;
  background: blue;
`

function Filters() {
  return (
    <FiltersStyled>
      <h1>Icons</h1>
      <Icon name="arrow-down"/>
      <Icon name="book"/>
      <Icon name="branch"/>
      <Icon name="cancel"/>
      <Icon name="check"/>
      <Icon name="github"/>
      <Icon name="heart"/>
      <Icon name="home"/>
      <Icon name="link"/>
      <Icon name="location"/>
      <Icon name="search"/>
      <Icon name="star"/>
      <Icon name="twitter"/>
      <Icon name="user"/>
      Filters
    </FiltersStyled>
  )
}

export default Filters
