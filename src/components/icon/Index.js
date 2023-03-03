import ArrowDown from './Arrow-down'
import Book from './Book'
import Branch from './Branch'
import Cancel from './Cancel'
import Check from './Check'
import Github from './Github'
import Heart from './Heart'
import Home from './Home'
import Link from './Link'
import Location from './Location'
import Search from './Search'
import Star from './Star'
import Twitter from './Twitter'
import User from './User'


function Index({ name, ...props }) {
  switch (name) {
    case 'arrow-down': {
      return <ArrowDown {...props}/>
    }
    case 'book': {
      return <Book {...props}/>
    }
    case 'branch': {
      return <Branch {...props}/>
    }
    case 'cancel': {
      return <Cancel {...props}/>
    }
    case 'check': {
      return <Check {...props}/>
    }
    case 'github': {
      return <Github {...props}/>
    }
    case 'heart': {
      return <Heart {...props}/>
    }
    case 'home': {
      return <Home {...props}/>
    }
    case 'link': {
      return <Link {...props}/>
    }
    case 'location': {
      return <Location {...props}/>
    }
    case 'search': {
      return <Search {...props}/>
    }
    case 'star': {
      return <Star {...props}/>
    }
    case 'twitter': {
      return <Twitter {...props}/>
    }
    case 'user': {
      return <User {...props}/>
    }
    default: {
      return null
    }
  }
}

Index.defaultProps = {
  size: 16,
  color: 'white',
}


export default Index
