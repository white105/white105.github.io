import React, { Component } from 'react';
import { UserCard, RepoCard } from 'react-github-cards';
import { Carousel } from 'react-responsive-carousel';
import NoogleLogo from '../../assets/media/newGoogle.png'
import MeemzIO from '../../assets/projects-assets/MeemzIO.png'
import { Link } from 'react-router-dom';
import 'react-github-cards/dist/default.css';
import GPACalculator from '../../assets/projects-assets/gpa-calculator.png'
import RubricCalculator from '../../assets/projects-assets/Rubric-Calculator.png'
import Chess from '../Chess/index.js'
import Noogle from '../../assets/projects-assets/noogle.png'
import BlockChain from '../../assets/projects-assets/blockchainub.png'
import BlockChainCrypto from '../../assets/projects-assets/backyard-crypto.png'
import SketchItLogo from '../../assets/hackathon-pics/sketchit.png'
import WhipLogo from '../../assets/hackathon-pics/whipLogo.png'
import CodeComp from '../../assets/projects-assets/codecomp.png'
import OneDentalMatch from '../../assets/projects-assets/odm.png'
import BarTabs from '../../assets/projects-assets/bar-tabs.png'
import MeemzIOGame from '../../assets/projects-assets/meemz-io-game.png'
import SketchItGame from '../../assets/projects-assets/sketch-it-game.png'
import BackyardCryptoProjectImage from '../../assets/projects-assets/backyard-project-image.png'
import UBProjectImage from '../../assets/projects-assets/ub-project-image.png'
import CanisiusProjectImage from '../../assets/projects-assets/canisius-project-image.png'
import BarTabsProjectImage from '../../assets/projects-assets/bar-tabs-project-image.png'
import ODMMobileProjectImage from '../../assets/projects-assets/odm-mobile-project-image.png'
import ODMWebProjectImage from '../../assets/projects-assets/odm-web-project-image.png'
import BarstoolProjectImage from '../../assets/projects-assets/barstool-project-image.png'
import CanisiusCollegeGradingImage from '../../assets/projects-assets/canisius-college-grading-image.png'
import BNMCProjectImage from '../../assets/projects-assets/bnmc-project-image.png'

/*

<div className='githubProjectsDiv'>
  <div className='projectsColumn' id='projectsColumn1'>
    <RepoCard username="white105" repo="DandyHacks" className='githubRepo' />
    <RepoCard username="white105" repo="Rubric-Calculator" className='githubRepo' />
  </div>
  <div className='projectsColumn' id='projectsColumn2'>
    <RepoCard username="white105" repo="white105.github.io" className='githubRepo' />
    <RepoCard username="white105" repo="stanford-algorithms" className='githubRepo' />
  </div>
  <div className='projectsColumn' id='projectsColumn2'>
    <RepoCard username="white105" repo="csc-395" className='githubRepo' />
    <RepoCard username="white105" repo="meemz-io" className='githubRepo' />
  </div>
</div>

        <hr></hr>

        <h3 id="portfolioTitle">Portfolio</h3>
        <h2 id="projectsTitle">Nicholas White Software Projects</h2>
*/

class Projects extends Component {

  render() {
    return (
      <div className='projectsContainer'>

        <div className='projectRow'>



          <div className='project'>
            <div className='hover-content'>
              <h3 className="hover-content-title">Backyard Crypto</h3>
              <p className="hover-content-type">Project Type - Freelance</p>

              <p className="hover-content-paragraph">
              I joined Backyard Crypto to re-architect the entire site and re-write their front end from scratch in ReactJS.
              The backend of the site is built entirely using Ruby on Rails and PostgreSQL.
              </p>
            </div>
            <a href='https://backyardcrypto.com/'><img className='projectImage' src={BackyardCryptoProjectImage}></img></a>
          </div>


          <div className='project'>
            <div className='hover-content'>
              <h3 className="hover-content-title">Buffalo Niagara Medical Campus Job Board</h3>
              <p className="hover-content-type">Project Type - Consulting</p>

              <p className="hover-content-paragraph">
              I built data analysis software for Buffalo Niagara Medical Campus from scratch using MongoDB,
              Express, React, and NodeJS. This application was very data intensive and had to handle several
              different data formats, data sources, and file types. I gave an initial demo to the CFO of Buffalo
              Niagara Medical Campus to receive project funding and then passed the project off for updates and maintanance.</p>

              <p className="hover-content-paragraph">The application implemented a user sign in job board with a drag and drop section for data files.
              Boostrap was used for the User Interface design and ChartJS was used to provide statistical feedback.</p>

            </div>
            <img className='projectImage' src={BNMCProjectImage}></img>
          </div>
        </div>

        <div className='projectRow'>
          <div className='project'>
            <div className='hover-content'>
              <h3 className="hover-content-title">One Dental Match Website</h3>
              <p className="hover-content-type">Project Type - Consulting</p>

              <p className="hover-content-paragraph">
              I was thrown into this project towards the end of development.
              I was given designs and features to implement using and lists
              of front end and back end issues to fix and resolve.
              I worked directly with the company founders throughout the development process.
              </p>

              <p className="hover-content-paragraph">
                The website was built using an AngularJS front end, NodeJS+Express back end,
                and a MYSQL database. The site also utilizes several different social media platforms
                for user authentication and user account creation.
              </p>

            </div>
            <img className='projectImage' src={ODMWebProjectImage}></img>
          </div>

          <div className='project'>
            <div className='hover-content'>
              <h3 className="hover-content-title">One Dental Match Mobile Application</h3>
              <p className="hover-content-type">Project Type - Consulting</p>

              <p className="hover-content-paragraph">
              I was thrown into this project towards the end of development.
              I was given designs and features to implement using and lists
              of front end and back end issues to fix and resolve.
              I worked directly with the company founders throughout the development process.
              </p>

              <p className="hover-content-paragraph">
                The mobile application was built using an Ionic, Cordova, and Google Firebase.
              </p>

            </div>
            <img className='projectImage' src={ODMMobileProjectImage}></img>
          </div>
        </div>

        <div className='projectRow'>
          <div className='project'>
            <div className='hover-content'>
              <h3 className="hover-content-title">University at Buffalo Blockchain Buildathon Website</h3>
              <p className="hover-content-type">Project Type - Consulting</p>

              <p className="hover-content-paragraph">
              I was given this project towards the end of development where I polished the overall design of the website
              and added company, speaker, and event content.
              </p>

            </div>
           <a href='http://www.hackbuf.com/'><img className='projectImage' src={UBProjectImage}></img></a>
          </div>

          <div className='project'>
            <div className='hover-content'>
              <h3 className="hover-content-title">Canisius College Grading Software</h3>
              <p className="hover-content-type">Project Type - Software Engineering</p>
              <p className="hover-content-paragraph">
              I developed this application to help Canisius Collge move towards paperless.
              The software was built using MongoDB, Express, React, and NodeJS and was deployed
              directly to Canisius College owned linux servers.
              </p>

              <p className="hover-content-paragraph">
              The app allows both students and professors to create accounts. Professors are able to generate dynamic, interactive rubrics
              for assignments to allow for easy, paperless grading. Grades are stored in a MongoDB database and class and student statistics
              are provided through ChartJS.
              </p>
            </div>
            <a href='https://rubric-calculator.herokuapp.com/'><img className='projectImage' src={CanisiusCollegeGradingImage}></img></a>
          </div>
        </div>

        <div className='projectRow'>
          <div className='mobileProject'>
            <div className='hover-content'>
              <h3 className="hover-content-title">Bar Tabs IOS Mobile Application</h3>
              <p className="hover-content-type">Project Type - Personal</p>

              <p className="hover-content-paragraph">
              This application uses geolocation, Google Maps API, Google Places API, and Google Firebase to give realtime data on people
              attending bars in the users vacinity. Some of this data includes ratings, comments, and the number of users currently attending
              a particular bar.
              </p>

              <p className="hover-content-paragraph">
              I developed the entire application from the ground up using Swift and the Google Cloud Platform.
              </p>

            </div>
            <img className='mobileProjectImage' src={BarTabsProjectImage}></img>
          </div>

          <div className='project'>
            <div className='hover-content'>
              <h3 className="hover-content-title">Barstool Sports Official Website</h3>
              <p className="hover-content-type">Project Type - Software Engineering</p>

              <p className="hover-content-paragraph">
              I arrived at Bartool Sports during a huge push to transition the site from PHP and Wordpress
              to a single page react site.
              </p>

              <p className="hover-content-paragraph">
                During my time at Barstool Sports I designed full pages of the website, added API routing to the backend,
                and developed a data scraping application in python to score company bloggers based on likes, comments, and views.

              </p>

            </div>
           <a href='https://www.barstoolsports.com/'><img className='projectImage' src={BarstoolProjectImage}></img></a>
          </div>
        </div>

      </div>
    );
  }
}

export default Projects;
