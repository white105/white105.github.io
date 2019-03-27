import React, { Component } from 'react';
import NoogleLogo from '../../assets/media/newGoogle.png'
import NoogleMic from '../../assets/media/googleMic.png'

class Noogle extends Component {

  render() {
    return (
      <div className='noogleComponent'>
        <div class="ui-widget">
          <img src={NoogleLogo} id="Noogle"></img>

          <div id="searchBarContainer">

            <input id="tags" placeholder="Search Noogle or type URL" type="text"></input>

            <div id="delete">
              <img src={NoogleMic} id="googleMic" onclick="noogleMic()" value='🔊 Play'></img>
            </div>

            <div id="buttons">
              <button id="noogleSearch" onclick="noogleSearch()">Noogle Search</button>
              <button id="feelingLucky" onclick="feelingLucky()">I'm Feeling Lucky</button>
            </div>


          </div>


        </div>


        <p id="noogleDefinition">Noogle -- The new and improved Google</p>
      </div>
    );
  }
}

export default Noogle;
