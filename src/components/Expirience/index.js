import React, { Component } from 'react';

class Expirience extends Component {

  render() {

    return (
      <div className='expirienceContainer'>

        <div className='employmentContainer'>

          <div className='employmentRow' id='top-employment-row'>

            <h3 className='employerCompany'>Horizns Consulting</h3>

            <div className='job-info'>
              <div className='employer-logo-container'>
                <img className='employment-logo' src={require('../../assets/employment-logos/horizns-logo.png')}></img>
              </div>
              <div className='sub-job-info'>
              <h4 className='jobTitle'>Software Engineering Intern - Full Stack</h4>
              <h4 className='jobLocation'>Amherst, New York</h4>

              </div>

            </div>

            <div className='employmentDetails'>
              <p className='employment-details'>- Worked as the lead JavaScript developer on multiple projects utilizing front end frameworks such as React, Ionic, and Angular and database technologies such as SQL and MongoDB</p>
              <p className='employment-details'>- Communicated directly with customers to ensure satisfaction with the product throughout the entire development process</p>
              <p className='employment-details'>- Worked directly with deployment to Heroku and Amazon Web Service</p>
            </div>

          </div>


          <div className='employmentRow'>

          <h3 className='employerCompany'>National Center for Supercomputing Applications</h3>

            <div className='job-info'>
              <div className='employer-logo-container'>
                <img className='employment-logo' src={require('../../assets/employment-logos/ncsa-logo.png')}></img>
              </div>
              <div className='sub-job-info'>
                <h4 className='jobTitle'>Research Fellow - Gravity Group</h4>
                <h4 className='jobLocation'>Urbana-Champaign, Illinois</h4>
              </div>

            </div>

            <div className='employmentDetails'>

              <p className='employment-details' >- Worked as a member of The Laser Interferometer Gravitational Wave Observatory implementing a new gravitational waveform model in the LSC Algorithm Library Suite - code base written in C</p>
              <p className='employment-details'>- Analyzed gravitational wave signals using python libraries, LIGO open source data, and elementary digital signal processing techniques</p>
              <p className='employment-details' >- Modeling and Detection of Black Hole Collisions with the Blue WatersSupercomputer</p>
            </div>
          </div>

          <div className='employmentRow'>
          <h3 className='employerCompany'>Barstool Sports</h3>


          <div className='job-info'>

          <div className='employer-logo-container'>
            <img className='employment-logo' src={require('../../assets/employment-logos/barstoolsports-logo.png')}></img>
          </div>
          <div className='sub-job-info'>
          <h4 className='jobTitle'>Software Engineering Intern - Full Stack</h4>
          <h4 className='jobLocation'>New York, New York</h4>
          </div>

          </div>
            <div className='employmentDetails'>
              <p className='employment-details'>- Helped transition the company site from PHP and WordPress to a single page React application through the design and implementation of full pages and major component features on the front end of the company site</p>
              <p className='employment-details'>- Wrote software tests using Nightwatch, Selenium, and Jest and fixed many bugs/issues</p>
              <p className='employment-details'>- Used python to analyze company data and developed a web application that scored company bloggers based on likes and views See less</p>

            </div>

          </div>

          <div className='employmentRow'>
          <h3 className='employerCompany'>Canisius College</h3>

          <div className='job-info'>
          <div className='employer-logo-container'>
            <img className='employment-logo' src={require('../../assets/employment-logos/canisius-logo.jpg')}></img>
          </div>
          <div className='sub-job-info'>
          <h4 className='jobTitle'>Computer Science Tutor and Teaching Assistant</h4>
          <h4 className='jobLocation'>Buffalo, New York</h4>
          </div>
          </div>
          <div className='employmentDetails'>
          <p className='employment-details'>- Taught students fundamental concepts of computer science and assisted in debugging/problem solving</p>
<p className='employment-details'>- Developed grading software for the Core Curriculum Committee capable of producing dynamic, interactive rubrics. The software also stored user, class and professor data and provided statistical feedback
</p>

          </div>

          </div>

          <div className='employmentRow' id='bottom-employment-row'>
          <h3 className='employerCompany'>University at Buffalo</h3>
          <div className='job-info'>
          <div className='employer-logo-container'>
            <img className='employment-logo' src={require('../../assets/employment-logos/ub-logo.png')}></img>
          </div>
            <div className='sub-job-info'>
              <h4 className='jobTitle'>Student Researcher - Turtlebot Robotics</h4>
              <h4 className='jobLocation'>Buffalo, New York</h4>
            </div>

          </div>
          <div className='employmentDetails'>
            <p className='employment-details'>- Implemented turtlebot autonomy using ROS and linux</p>
            <p className='employment-details'>- Helped assemble initial turtlebot hardware and software</p>
          </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Expirience;
