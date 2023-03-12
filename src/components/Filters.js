import styled from 'styled-components'
import InputText from './Input-text'
import Selector from './Selector'
import Separator from './Separator'

const FiltersStyled = styled.div`
  grid-area: filters;
  .count {
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin-block-end: 1.5rem;
  }
  .action-list {
    display: flex;
    gap: 1rem;
  }
  .select-list {
    display: flex;
    gap: .5rem;
  }
`

function Filters({ repoListCount = 100}) {
  return (
    <FiltersStyled>
      <h3 className="count">
        Repositorios {repoListCount}
      </h3>
      <div className="action-list">
        <InputText 
          placeholder='Find a repository'
          type="search"
        />
        <div className="select-list">
          <Selector>
            <option value="all" >All</option>
            <option value="forks">Forks</option>
          </Selector>
          <Selector>
            <option value="language" disabled>Language</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
          </Selector>
          <Selector>
            <option value="sort" disabled>Sort</option>
            <option value="stars">Stars</option>
          </Selector>
        </div>
      </div>
      <Separator />

    </FiltersStyled>
  )
}

export default Filters
