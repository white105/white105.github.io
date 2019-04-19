import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//keep components in alphabetical order
import HeaderComponent from '../HeaderComponent'
import Home from '../Home'
import About from '../About'
import Coins from '../Coins'
import Community from '../Community'
import Genres from '../Genres'
import KeyPlayers from '../KeyPlayers'
import Terminology from '../Terminology'

class Core extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about-us" component={About}/>
          <Route exact path="/coins" component={Coins}/>
          <Route exact path="/community" component={Community}/>
          <Route exact path="/genres" component={Genres}/>
          <Route exact path="/key-players" component={KeyPlayers}/>
          <Route exact path="/Terminology" component={Terminology}/>
        </div>
      </div>
    )
  }
}

export default Core
