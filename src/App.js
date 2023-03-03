import Filters from './components/Filters';
import Layout from './components/Layout';
import Profile from './components/Profile';
import RepoList from './components/Repo-list';
import Search from './components/Search';
import repoData from './components/repo-data'

/* const repoList = [
  {
    name: 'mi primer proyecto react', 
    id: 123,
  },
  {
    name: 'mi segundo proyecto react', 
    id: 124,
  }
] */

function App() {
  return (
    <Layout>
      <Profile />
      <Filters />
      <RepoList repoList={repoData}/>
      <Search />
    </Layout>
  )
  
}

export default App;
