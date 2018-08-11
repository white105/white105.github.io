import React, { Component } from 'react';

class Research extends Component {

  constructor() {
    super()

    this.state = {
      slideIndex: 0
    }

  }


  render() {
    return (
      <div>
        <p>National Center for Supercomputing Applications Gravity Group - Modeling and Detection of Black Hole Collisions Using Blue Water Supercomputer</p>

        <h2>Automatic Slideshow</h2>
<p>Change image every 2 seconds:</p>

<div className="slideshow-container">

<div className="mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img src={require('../../uiuc_research_photos/photo1.jpg')} style={{'width': '100%'}}></img>
  <div className="text">Caption Text</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">2 / 3</div>
  <img src={require('../../uiuc_research_photos/photo2.jpg')} style={{'width': '100%'}}></img>
  <div className="text">Caption Two</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">3 / 3</div>
  <img src={require('../../uiuc_research_photos/photo3.jpg')} style={{'width': '100%'}}></img>
  <div className="text">Caption Three</div>
</div>

</div>
<br></br>

<div style={{'textAlign': 'center'}}>
  <span className="dot"></span>
  <span className="dot"></span>
  <span className="dot"></span>
</div>
      </div>
    );
  }
}

export default Research;
