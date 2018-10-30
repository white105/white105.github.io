import React, { Component } from 'react';
import GPACalculator from '../GPACalculator/index.js';
import RubricCalculator from '../RubricCalculator/index.js';
import { UserCard, RepoCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';
import { Carousel } from 'react-responsive-carousel';

class Projects extends Component {

  render() {
    return (
      <div>
        <div className='githubProjectsDiv'>
          <div className='projectsColumn' id='projectsColumn1'>
            <RepoCard username="white105" repo="DandyHacks" className='githubRepo' />
            <RepoCard username="white105" repo="Rubric-Calculator" className='githubRepo' />
          </div>
          <div className='projectsColumn' id='projectsColumn2'>
            <RepoCard username="white105" repo="white105.github.io" className='githubRepo' />
            <RepoCard username="white105" repo="react-gpa" className='githubRepo' />
          </div>
        </div>
        <hr></hr>

        <div className='projectsContainer'>

        <h2 className='hackathonTitle'>Dandy Hacks 2018</h2>
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} className='carousel'>
                <div className='carouselImageDiv'>
                    <img src={require('../../hackathon-pics/dandyhacksgroup.jpg')} className='carouselImage' alt='#'/>
                </div>
                <div className='carouselImageDiv'>
                    <img src={require('../../hackathon-pics/group_pic.jpg')} className='carouselImage' alt='#'/>
                </div>
                <div className='carouselImageDiv'>
                    <img src={require('../../hackathon-pics/presentation.jpg')} className='carouselImage' alt='#'/>
                </div>
        </Carousel>



        <p className='projectsParagraph'>Our project "Whip" is a utility application that utlizes several data sources and APIs to
        inform Uber/Lyft drivers about the best times and locations to work</p>
        <img src={require('../../hackathon-pics/wip_logo.png')} className='whipLogo'></img>


        <p className='projectsParagraph'><b><a href='https://www.youtube.com/watch?v=G0WvooZfPRE'>Whip Demo</a></b></p>

        <p className='projectsParagraph'>Whip was selected from over 40 demoed projects to receive two of the six available awards</p>

        <p className='projectsParagraph'><b><u>Awards</u></b></p>

        <p className='projectsParagraph'><b>Google Sponsored Award</b> - Awarded to the project that best utilizes the Google Cloud Platform</p>
        <p className='projectsParagraph'><b>FactSet Sponsored Award</b> - Awarded to the project that best utilizes multiple different APIs</p>

        </div>

        <br></br>
        <hr></hr>

        <GPACalculator></GPACalculator>

      </div>
    );
  }
}

export default Projects;
