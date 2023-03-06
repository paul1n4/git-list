import Filters from './components/Filters';
import Layout from './components/Layout';
import Profile from './components/Profile';
import RepoList from './components/Repo-list';
import Search from './components/Search';
import repoData from './components/repo-data'
import { useState, useEffect } from 'react'
import { getUser, getRepos } from './services/users';


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
  const [user, setUser] = useState([])
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getUser('leonidasesteban').then(({ data, isError}) => {
      if(isError){
        console.log('No hemos encontrado a este crack');
        return
      }
      setUser(data)
    })
  }, [])
  
  useEffect(() => {
    getRepos('leonidasesteban').then(({ data, isError}) => {
      if(isError){
        console.log('No hemos encontrado los repos de este crack');
        return
      }
      setRepos(data)
    })
  }, [])

  return (
    <Layout>
      <Profile {...user}/>
      <Filters />
      <RepoList repoList={repos}/>
      <Search />
    </Layout>
  )
  
}

export default App;
