import Filters from './components/Filters';
import Layout from './components/Layout';
import Profile from './components/Profile';
import RepoList from './components/Repo-list';
import Search from './components/Search';
import { useState, useEffect } from 'react'
import { getUser, getRepos } from './services/users';
import { useParams } from 'react-router-dom'
import Modal from './Modal';

function App() {
  const params = useParams()
  let username = params.user
  if(!username) {
    username = 'leonidasesteban'
  }
  const [user, setUser] = useState([])
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false)

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
      <Modal isActive={modal} setModal={setModal}/>
      <Profile {...user}/>
      <Filters />
      <RepoList repoList={repos}/>
      <Search setModal={setModal}/>
    </Layout>
  )
  
}

export default App;
