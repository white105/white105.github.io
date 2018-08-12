import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class Research extends Component {

  render() {

    let infiniteLoop = true

    return (
      <div className='researchContainer'>
        <p className='researchParagraph'>National Center for Supercomputing Applications Gravity Group - Modeling and Detection of Black Hole Collisions Using Blue Water Supercomputer</p>

        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} className='carousel'>
                <div className='carouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo1.jpg')} className='carouselImage' alt='#'/>
                </div>
                <div className='carouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo2.jpg')} className='carouselImage' alt='#'/>
                </div>
                <div className='carouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo3.jpg')} className='carouselImage' alt='#'/>
                </div>
                <div className='carouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo4.jpg')} className='carouselImage' alt='#'/>
                </div>
                <div className='carouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo5.jpg')} className='carouselImage' alt='#'/>
                </div>
                <div className='carouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo6.jpg')} className='carouselImage' alt='#'/>
                </div>
                <div className='carouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo7.jpg')} className='carouselImage' alt='#'/>
                </div>
        </Carousel>

        <br></br>
        <br></br>
        <hr></hr>
        <br></br>

        <div className='researchExplanation'>
          <h2 className='researchExplanationHeader'>ENIGMA</h2>
          <p className='researchParagraph'>ENIGMA - Eccentric, nonspinning, inspiral, Gaussian-process merger
            approximant for the detection and characterization of eccentric binary black hole mergers</p>
        </div>

      </div>
    );
  }
}

export default Research;
