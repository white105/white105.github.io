import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import ResearchPhoto1 from '../../assets/uiuc_research_photos/photo1.jpg';
import ResearchPhoto2 from '../../assets/uiuc_research_photos/photo2.jpg';
import ResearchPhoto3 from '../../assets/uiuc_research_photos/photo3.jpg';
import ResearchPhoto4 from '../../assets/uiuc_research_photos/photo4.jpg';
import ResearchPhoto5 from '../../assets/uiuc_research_photos/photo5.jpg';
import ResearchPhoto6 from '../../assets/uiuc_research_photos/photo6.jpg';
import ResearchPhoto7 from '../../assets/uiuc_research_photos/photo7.jpg';
import ResearchPhoto8 from '../../assets/projects-assets/turtlebot-image.jpg';

class Research extends Component {

  render() {

    let infiniteLoop = true

    return (
      <div>
        <p className='researchParagraph' id='researchTitle'>National Center for Supercomputing Applications Gravity Group - Modeling and Detection of Black Hole Collisions Using Blue Water Supercomputer</p>

        <div className="projectRow">

          <div className='project'>
            <img className='projectImage' src={ResearchPhoto1}></img>
          </div>

          <div className='project'>
            <img className='projectImage' src={ResearchPhoto4}></img>
          </div>

        </div>

        <br></br>
        <hr></hr>
        <br></br>

        <h2 className='researchExplanationHeader'><a id='enigmaLink' href='https://arxiv.org/abs/1711.06276'>ENIGMA</a></h2>

        <p className='researchParagraph'>Eccentric, nonspinning, inspiral, Gaussian-process merger
          approximant for the detection and characterization of eccentric binary black hole mergers</p>

          <div id='researchLogoContainer'>
            <img src={require('../../assets/research_logos/ncsa.png')} className='researchLogo'></img>
            <img src={require('../../assets/research_logos/ligo.jpg')} className='researchLogo'></img>
          </div>

          <p className='researchParagraph' id='rp2'>From May 2018 - July 2018 I worked as an active member and research fellow of both The
            National Center for Supercomputing Applications and The Laser Interferometer Gravitational-Wave Observatory
            implementing an eccentric waveform model in LALSuite (The LSC Algorithm Library Suite). Under the mentorship
            of Roland Haas (Ph.D. Physics) and Eliu Huerta (Ph.D. Theoretical Astrophysics) I was able to improve my understanding
            of advanced physics and astrophysics while simultaneously exercising my computational skillset as an engineer.</p>


        <div className='youtubeVideos'>
          <iframe className='youtubeIframe' width="560" height="315" src="https://www.youtube.com/embed/P__KP0TG3U0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p className='researchParagraph'>I plan to continue my research during my free time while streaming on twitch / youtube. I realized from this summer that
          I hadn't even scratched the surface of general relativity and digital signal processing and I'm interested in learning more about both topics.</p>
        </div>

        <hr></hr>

        <h2 className='turtlebotHeader' id='hackathonMainTitle'>Turtlebot Robotics 2017</h2>

        <video width="560" height="315" controls preload='preload' className='turtlebotVideo'>
         <source src = {require('../../assets/videos/turtlebot.mp4')} type = "video/mp4"></source>
         This browser doesn't support video tag.
         </video>

         <p className='researchParagraph'>During the Fall semester of 2017 I worked as a student researcher implementing turtlebot autonomy with ROS and Linux</p>

         <h3 id='contributionsTitle'>Contributions</h3>

         <p className='researchParagraph'>I helped assemble the original hardware and software including the asus camera, raspberry pi, and installation of Linux.
         I then worked through ROS tutorials and implemented mapping and navigation. Our research team consisted of four people and including myself, my classmate,
         and two professors.</p>

         <br></br>
         <hr></hr>
         <br></br>

         <h3 id='researchPhotosTitle'>Research Photos</h3>


         <div className="projectRow">

           <div className='project'>
             <img className='projectImage' src={ResearchPhoto1}></img>
           </div>

           <div className='project'>
             <img className='projectImage' src={ResearchPhoto2}></img>
           </div>

         </div>

         <div className="projectRow">

           <div className='project'>
             <img className='projectImage' src={ResearchPhoto3}></img>
           </div>

           <div className='project'>
             <img className='projectImage' src={ResearchPhoto4}></img>
           </div>

         </div>

         <div className="projectRow">

           <div className='project'>
             <img className='projectImage' src={ResearchPhoto5}></img>
           </div>

           <div className='project'>
             <img className='projectImage' src={ResearchPhoto7}></img>
           </div>

         </div>

         <div className="projectRow">

           <div className='project'>
             <img className='projectImage' src={ResearchPhoto6}></img>
           </div>

         </div>


      </div>
    );
  }
}

export default Research;
