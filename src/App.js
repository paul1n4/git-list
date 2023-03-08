import Filters from './components/Filters';
import Layout from './components/Layout';
import Profile from './components/Profile';
import RepoList from './components/Repo-list';
import Search from './components/Search';
import { useState, useEffect } from 'react'
import { getUser, getRepos } from './services/users';
import { useParams } from 'react-router-dom'

function App() {
  const params = useParams()
  let username = params.user
  if(!username) {
    username = 'leonidasesteban'
  }
  const [user, setUser] = useState([])
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getUser(username).then(({ data, isError}) => {
      if(isError){
        console.log('No hemos encontrado a este crack');
        return
      }
      setUser(data)
    })
  
    getRepos(username).then(({ data, isError}) => {
      if(isError){
        console.log('No hemos encontrado los repos de este crack');
        return
      }
      setRepos(data)
    })
  }, [username])

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
