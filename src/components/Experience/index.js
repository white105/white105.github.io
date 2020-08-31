import React, { Component } from 'react';

class Experience extends Component {

  render() {

    return (
      <div className='experienceContainer'>

        <div className='employmentContainer'>

        <div className='employmentRow' id='backyard-crypto'>

        <h3 className='employerCompany'>YouTube</h3>

        <div className='job-info'>

          <div className='sub-job-info'>
            <h4 className='jobTitle'>Content Creator</h4>
            <h4 className='jobLocation'>Self Employed, Remotego
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; June 2019 - Present</h4>
          </div>

        </div>

        <div className='employer-logo-container'>
          <img id="youtube-logo" className='employment-logo' src={require('../../assets/employment-logos/youtube-logo.png')}></img>
        </div>


        <div className='employmentDetails'>
          <p className='employment-details'>-Make programming related videos including advice videos, leetcode solutions, and general coding tutorials</p>
          <p className='employment-details'>-Grew an audience of 95 thousand subscribers and over 5 million views in 1 year</p>
          <p className='employment-details'>-Helped many professionals get hired at top companies including Facebook, Google, Amazon, etc.</p>
        </div>




        </div>

        <div className='employmentRow' id='backyard-crypto'>

          <h3 className='employerCompany'>Buffalo Bills</h3>

          <div className='job-info'>

            <div className='sub-job-info'>
              <h4 className='jobTitle'>Mobile Applications Developer Intern</h4>
              <h4 className='jobLocation'>Buffalo, New York &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; June 2019 - Present</h4>
            </div>

          </div>

          <div className='employer-logo-container'>
            <img id="backyard-crypto-logo" className='employment-logo' src={require('../../assets/employment-logos/bills-logo.jpeg')}></img>
          </div>


          <div className='employmentDetails'>
            <p className='employment-details'>-Developing a cross platform Player Onboarding Application using Xamarin Forms and Microsoft Technologies</p>
          </div>




        </div>

        <div className='employmentRow' id='backyard-crypto'>

          <h3 className='employerCompany'>Kirkwork LLC</h3>

          <div className='job-info'>

            <div className='sub-job-info'>
              <h4 className='jobTitle'>Software Developer</h4>
              <h4 className='jobLocation'>Syracuse, New York &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; May 2019 - Present</h4>
            </div>

          </div>

          <div className='employer-logo-container'>
            <img id="kirkwork-logo" className='employment-logo' src={require('../../assets/employment-logos/kirkwork.png')}></img>
          </div>


          <div className='employmentDetails'>
            <p className='employment-details'>-Working on a variety of native IOS & Android mobile applications for different companies</p>
          </div>




        </div>

          <div className='employmentRow' id='backyard-crypto'>

            <h3 className='employerCompany'>Backyard Crypto</h3>

            <div className='job-info'>

              <div className='sub-job-info'>
                <h4 className='jobTitle'>Freelance Software Developer</h4>
                <h4 className='jobLocation'>Buffalo, New York &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; April 2019 - May 2019</h4>
              </div>

            </div>

            <div className='employer-logo-container'>
              <img id="backyard-crypto-logo" className='employment-logo' src={require('../../assets/employment-logos/backyard-logo.png')}></img>
            </div>


            <div className='employmentDetails'>
              <p className='employment-details'>-Came in and re-architected the main code base by tearing out the front end views (Rails+HTML) and creating an entirely new single page React
  application front end application that communicates with a Ruby on Rails API through service requests</p>
              <p className='employment-details'>-Set up redux data store and updated deployment to Amazon Web Services</p>
            </div>




          </div>

          <div className='employmentRow' id='horizn-consulting'>

            <h3 className='employerCompany'>Horizns Consulting</h3>

            <div className='job-info'>
              <div className='sub-job-info'>
              <h4 className='jobTitle'>Independent Consultant</h4>
              <h4 className='jobLocation'>Amherst, New York &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mar 2018 - Aug 2018</h4>

              </div>

            </div>

            <div className='employer-logo-container'>
              <img id="horizns-consulting-logo" className='employment-logo' src={require('../../assets/employment-logos/horizns-logo.png')}></img>
            </div>

            <div className='employmentDetails'>
              <p className='employment-details'>- Worked as the lead JavaScript developer on multiple projects utilizing front end frameworks such as React, Ionic, and Angular and database technologies such as SQL and MongoDB</p>
              <p className='employment-details'>- Communicated directly with customers to ensure satisfaction with the product throughout the entire development process</p>
              <p className='employment-details'>- Worked directly with deployment to Heroku and Amazon Web Service</p>
            </div>

          </div>


          <div className='employmentRow' id='ncsa-row'>

          <h3 className='employerCompany'>National Center for Supercomputing Applications</h3>

            <div className='job-info'>

              <div className='sub-job-info'>
                <h4 className='jobTitle'>Research Fellow - Gravity Group</h4>
                <h4 className='jobLocation'>Urbana-Champaign, Illinois &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; May 2018 - July 2018</h4>
              </div>

            </div>

            <div className='employer-logo-container'>
              <img id="ncsa-logo" className='employment-logo' src={require('../../assets/employment-logos/ncsa-logo.png')}></img>
            </div>

            <div className='employmentDetails'>

              <p className='employment-details' >- Worked as a member of The Laser Interferometer Gravitational Wave Observatory implementing a new gravitational waveform model in the LSC Algorithm Library Suite - code base written in C</p>
              <p className='employment-details'>- Analyzed gravitational wave signals using python libraries, LIGO open source data, and elementary digital signal processing techniques</p>
              <p className='employment-details' >- Modeling and Detection of Black Hole Collisions with the Blue Waters Supercomputer</p>
            </div>
          </div>

          <div className='employmentRow' id='barstool-sports-row'>
          <h3 className='employerCompany'>Barstool Sports</h3>


          <div className='job-info'>


          <div className='sub-job-info'>
          <h4 className='jobTitle'>Software Engineering Intern - Full Stack</h4>
          <h4 className='jobLocation'>New York, New York &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; May 2017 - Aug 2017</h4>
          </div>

          </div>

          <div className='employer-logo-container'>
            <img id="barstool-sports-logo" className='employment-logo' src={require('../../assets/employment-logos/barstoolsports-logo.png')}></img>
          </div>


            <div className='employmentDetails'>
              <p className='employment-details'>- Helped transition the company site from PHP and WordPress to a single page React application through the design and implementation of full pages and major component features on the front end of the company site</p>
              <p className='employment-details'>- Wrote software tests using Nightwatch, Selenium, and Jest and fixed many bugs/issues</p>
              <p className='employment-details'>- Used python to analyze company data and developed a web application that scored company bloggers based on likes and views</p>

            </div>

          </div>

          <div className='employmentRow' id='canisius-row'>
          <h3 className='employerCompany'>Canisius College</h3>

          <div className='job-info'>

          <div className='sub-job-info'>
          <h4 className='jobTitle'>Computer Science Tutor</h4>
          <h4 className='jobLocation'>Buffalo, New York &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jan 2017 - May 2018</h4>
          </div>


          </div>

          <div className='employer-logo-container'>
            <img id="canisius-logo" className='employment-logo' src={require('../../assets/employment-logos/canisius-logo.jpg')}></img>
          </div>
          <div className='employmentDetails'>
          <p className='employment-details'>- Taught students fundamental concepts of computer science and assisted in debugging/problem solving</p>
          <p className='employment-details'>- Developed grading software for the Core Curriculum Committee capable of producing dynamic, interactive rubrics. The software also stored user, class and professor data and provided statistical feedback</p>


          </div>

          </div>


        </div>

      </div>
    );
  }
}

export default Experience;
