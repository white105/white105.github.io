import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class Research extends Component {

  render() {

    let infiniteLoop = true

    return (
      <div className='researchContainer'>
        <p className='researchParagraph'>National Center for Supercomputing Applications Gravity Group - Modeling and Detection of Black Hole Collisions Using Blue Water Supercomputer</p>

        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} className='researchCarousel'>
                <div className='researchCarouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo1.jpg')} className='researchCarouselImage' alt='#'/>
                </div>
                <div className='researchCarouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo2.jpg')} className='researchCarouselImage' alt='#'/>
                </div>
                <div className='researchCarouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo3.jpg')} className='researchCarouselImage' alt='#'/>
                </div>
                <div className='researchCarouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo4.jpg')} className='researchCarouselImage' alt='#'/>
                </div>
                <div className='researchCarouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo5.jpg')} className='researchCarouselImage' alt='#'/>
                </div>
                <div className='researchCarouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo6.jpg')} className='carouselImage' alt='#'/>
                </div>
                <div className='researchCarouselImageDiv'>
                    <img src={require('../../uiuc_research_photos/photo7.jpg')} className='carouselImage' alt='#'/>
                </div>
        </Carousel>

        <br></br>
        <hr></hr>

        <h2 className='researchExplanationHeader'><a id='enigmaLink' href='https://arxiv.org/abs/1711.06276'>ENIGMA</a></h2>

        <p className='researchParagraph'>Eccentric, nonspinning, inspiral, Gaussian-process merger
          approximant for the detection and characterization of eccentric binary black hole mergers</p>

          <div id='researchLogoContainer'>
            <img src={require('../../research_logos/ncsa.png')} className='researchLogo'></img>
            <img src={require('../../research_logos/ligo.jpg')} className='researchLogo'></img>
          </div>

          <p className='researchParagraph' id='rp2'>From May 2018 - July 2018 I worked as an active member and research fellow of both The
            National Center for Supercomputing Applications and The Laser Interferometer Gravitational-Wave Observatory
            implementing an eccentric waveform model in LALSuite (The LSC Algorithm Library Suite). Under the mentorship
            of Roland Haas (Ph.D. Physics) and Eliu Huerta (Ph.D. Theoretical Astrophysics) I was able to improve my understanding
            of advanced physics and astrophysics while simultaneously exercising my computational skillset as an engineer.</p>

      </div>
    );
  }
}

export default Research;
