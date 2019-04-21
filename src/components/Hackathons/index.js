import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import SketchItLogo from '../../assets/hackathon-pics/sketchit.png'
import WhipLogo from '../../assets/hackathon-pics/whipLogo.png'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import WhipSiteProjectImage from '../../assets/projects-assets/whip-site-project-image.png'
import SketchItProjectImage from '../../assets/projects-assets/sketch-it-project-image.png'
import ALCProjectImage from '../../assets/projects-assets/alc-project-image.png'

class Hackathons extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isDesktop: false
    }

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 600 });
    if (window.innerWidth > 600) {
      let headerDiv = document.getElementById("headerDiv")
      headerDiv.style.height = '6rem'
    }
  }

  /*<div className='mlhLogoContainer'><img className='mlhlogo' src={require('../../mlh-logo.jpg')}></img></div>*/

  render() {
    const isDesktop = this.state.isDesktop;
    if (isDesktop) {
      return (
        <div className='hackathonComponent'>

        <h3 id="hackathonProjectsTitle">Hackathon Projects</h3>

        <div className="projectRow">

        <div className='project'>
          <div className='hover-content'>
            <h3 className="hover-content-title">Academic Live Chat</h3>

            <p className="hover-content-paragraph">
            I worked together with 3 teammates at the Cornell University's annual 48 hour hackathon
            to build Academic Live Chat. ALC is a web application built with MongoDB, Express, React, NodeJS, SocketIO,
            Google Cloud Platform, and IBM Watson provides a variety of features to connect you with someone to talk
            about a topic of similar interest.
            </p>

            <p className="hover-content-paragraph">
            The application uses profile matching through user account similarities and Socket IO to pair individuals.
            Socket IO is also used for messaging and peer to peer video chatting between users.
            </p>




          </div>
          <img className='projectImage' src={ALCProjectImage}></img>
        </div>


        <div className='project'>
          <div className='hover-content'>
            <h3 className="hover-content-title">Whip</h3>

            <p className="hover-content-paragraph">
            I worked together with 3 teammates at the University of Rochester's annual 48 hour hackathon
            to build Whip. Whip is a web application built with MongoDB, Express, React, and NodeJS that
            utilizes flight data, event data, and both the uber and lyft APIs to provide users the knowlege
            they need to plan their work schedule.
            </p>

            <p className="hover-content-paragraph">
            The application uses a python microservice to gather flight data from a variety of resources.
            Whip provides charts that diagram peak airport activity time and calls an event API to find nearby events
            sorted in order of number of people attending. Whip also has a customized Google Map that plots all nearby events and airports as well
            as other nearby uber and lyft drivers.
            </p>

            <p className="hover-content-paragraph">
            Won Two Awards - Best use of multiple APIs and Best use of Google Cloud Platform
            </p>

          </div>
          <img className='projectImage' src={WhipSiteProjectImage}></img>
        </div>

        </div>

        <div className="projectRow">

        <div className='project'>
          <div className='hover-content'>
            <h3 className="hover-content-title">Sketch It</h3>

            <p className="hover-content-paragraph">
            I worked together with 3 teammates at the University at Buffalo's annual 48 hour hackathon
            to build Sketch It. Sketch It is a web application build with VanillaJS, MongoDB, and NodeJS that

            utilizes the canvas API, Google Cloud Platform, and SocketIO to provide users with a platform to connect through
            shared whiteboarding.
            </p>

            <p className="hover-content-paragraph">
            A random url is generated for each whiteboarding session. Users can connect to this specific url and communicate
            through drawings and messaging. Canvas coordinates are sent through SocketIO to other users and are stored in MongoDB in case
            users want their session to persist.
            </p>

            <p className="hover-content-paragraph">
            Finalist out of over 50 team projects - Won Third Place
            </p>

          </div>
          <a href='https://backyardcrypto.com/'><img className='projectImage' src={SketchItProjectImage}></img></a>
        </div>

        </div>


        <hr></hr>

        <h3 id="hackathonPhotosTitle">Hackathon Photos</h3>

        <div className="projectRow">

        <div className='project'>
          <div className='hover-content'>
            <h3 className="hover-content-title">Big Red Hacks</h3>
          </div>
          <a href='https://backyardcrypto.com/'><img src={require('../../assets/hackathon-pics/big_red.jpg')} className='projectImage' alt='#'/></a>
        </div>

        <div className='project'>
          <div className='hover-content'>
            <h3 className="hover-content-title">Big Red Hacks</h3>
          </div>
          <a href='https://backyardcrypto.com/'><img src={require('../../assets/hackathon-pics/big-red-2.jpg')} className='projectImage' alt='#'/></a>
        </div>



        </div>


        <div className="projectRow">

        <div className='project'>
          <div className='hover-content'>
            <h3 className="hover-content-title">Dandy Hacks</h3>
          </div>
          <a href='https://backyardcrypto.com/'><img src={require('../../assets/hackathon-pics/dandyhacksgroup.jpg')} className='projectImage' alt='#'/></a>
        </div>

        <div className='project'>
          <div className='hover-content'>
            <h3 className="hover-content-title">Dandy Hacks</h3>
          </div>
          <a href='https://backyardcrypto.com/'><img src={require('../../assets/hackathon-pics/presentation.jpg')} className='projectImage' alt='#'/></a>
        </div>

        </div>

        <div className="projectRow">

        <div className='project'>
          <div className='hover-content'>
            <h3 className="hover-content-title">UB Hacking</h3>
          </div>
          <a href='https://backyardcrypto.com/'><img src={require('../../assets/hackathon-pics/ubhacking2.jpg')} className='projectImage' alt='#'/></a>
        </div>


        <div className='project'>
          <div className='hover-content'>
            <h3 className="hover-content-title">UB Hacking</h3>
          </div>
          <a href='https://backyardcrypto.com/'><img src={require('../../assets/hackathon-pics/ubhacking1.jpg')} className='projectImage' alt='#'/></a>
        </div>

        </div>




        </div>
      );
    } else {
      return (
        <div>

          <div className='hackathonContainer'>

          <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} className='hackathonCarousel'>
                  <div className='hackathonCarouselImageDiv'>
                      <img src={require('../../assets/hackathon-pics/big_red.jpg')} className='hackathonCarouselImage' alt='#'/>
                  </div>

                  <div className='hackathonCarouselImageDiv'>
                      <img src={require('../../assets/hackathon-pics/dandyhacksgroup.jpg')} className='hackathonCarouselImage' alt='#'/>
                  </div>

                  <div className='hackathonCarouselImageDiv'>
                      <img src={require('../../assets/hackathon-pics/presentation.jpg')} className='hackathonCarouselImage' alt='#'/>
                  </div>

                  <div className='hackathonCarouselImageDiv'>
                      <img src={require('../../assets/hackathon-pics/ubhacking1.jpg')} className='hackathonCarouselImage' alt='#'/>
                  </div>

                  <div className='hackathonCarouselImageDiv'>
                      <img src={require('../../assets/hackathon-pics/ubhacking2.jpg')} className='hackathonCarouselImage' alt='#'/>
                  </div>
          </Carousel>

          <div className='mobileHackathonDetails'>
            <h4 id='mobileAwardsHeader'>Awards</h4>
            <p className='mobileAward'>UB Hacks - Finalist (Third Place)</p>
            <p className='mobileAward'>Dandy Hacks - Google Cloud Platform Award</p>
            <p className='mobileAward'>Dandy Hacks - FactSet API Award</p>
          </div>


          </div>
        </div>
      )
    }

    /*
    <div className='mobileHackathonDetails'>
      <div id='ubhackingDetails'>
        <p className='photoText'>This is a photo of our team at Big Red Hacks in 2018!</p>
        <p className='photoText'>Big Red Hacks is Cornell University's annual student held hackathon. This was the first hackathon that I had ever participated in and it was a ton of fun.</p>
        <p className='photoText'>I met my team members Abhishek Kumar, Hitesh Santwani, and Veerappan Saravanan on the bus ride to the event. The three of them were students at the University of Buffalo pursuing masters
        degrees in data analytics.</p>
        <p className='photoText'>The three of them were originally going to try and work on a project related to Natural Language Processing and machine learning, but when I told them my idea they completely changed their minds.
        Instead we built academic live chat, a platform for all things academic. This is a project I still continue to work on to this day. Academic Live Chat uses the power of web sockets to provide excellent real time web tools for users
        to engage in an academic setting.</p>
        <p className='photoText'>Unfortunately we didn't end up winning at the event. This was my first hackathon so I wasn't necessarily discouraged because I wasn't aware of how the events worked. I noticed during the end that the most important thing
        to do during the hackathon is develop a slick User Interface and get your point across </p>
        <p className='photoText'>I took this event as a valuable learning experience that would help me win at future events.</p>
      </div>
      <div id='dandyHacksDetails'>
        <p className='photoText'>This is a group photo of my teamates Michael Henry, Daniel Kiselev, and I during the second half of Dandy Hacks. Unfortunately our other team member Yipeng Zhang wasn't around for the picture, but he is certainly included in our presentational picture on the next slide.</p>
        <p className='photoText'>Michael Henry and Daniel Kiselev are both seniors at the University of Rochester graduating in May of 2019 with Bachelors degrees in Computer Science. Yipeng Zhang is currently a sophomore at the University of Rochester expected to graduate with a degree in both Mathematics and Computer Science in 2021.</p>
        <p className='photoText'>When I planned to come to Dandy Hacks, I came with the intention of winning an award after my first hackathon resulted in a loss the prior week. When I arrived I asked many teams if I could join, but there wasn't really a good fit for me anywhere. After talking to about twenty different teams I found Mike and Dan.
        They said they were interested in trying to win an award and they already had the cool idea for our project. To make things easier on our team we decided to look for one more member. Yipeng was the first person I talked to and while he didn't have any prior javascript experience, he definitely seemed like a smart kid.</p>
        <p className='photoText'>I never expected our team to do as well as we did. We all got along great and it was the most fun I've had at a hackathon so far. It was the perfect balance of work and fun which is exactly what a hackathon is supposed to be.</p>
        <p className='photoText'>The next slide shows a picture of us giving a demo of our project "Whip" at the end of Dandy Hacks. It will also provide a description of the project as well as a link to the demo.</p>
      </div>

      <div id='dandyHacksDetails'>
        <p className='photoText'>This is a photo of our group presenting our project "Whip" during Dandy Hack's closing ceremony.</p>
        <div class='logoAbsoluteContainer'>
        <img src={require('../../hackathon-pics/wip_logo.png')} className='whipLogoHover'></img>
        <img src={require('../../hackathon-pics/square_map.png')} className='whipLogoHover'></img>
        </div>
        <p className='photoText'>Whip is a utility application that utlizes several data sources and APIs to inform Uber/Lyft drivers about the best times and locations to work. Whip does this by utilizing data from various sources.
        We implemented the Lyft API to get nearby drivers locations in real time for users to know where competition currently lies. We implemented Eventful's API to get nearby events and sorted them by popularity, allowing users to know exactly where large groups of people might need rides. We also built a web scraper in python to
        scrape flight data, allowing users to know when large groups of people might be getting off a flight and might need a ride back home. We then implemented Google Maps API in our project to plot this data using custom symbols to give the users a coherent visual representation of all of this data.</p>
        <p className='photoText'>Check out a video demo of our project <a className='demoLink' href='https://www.youtube.com/watch?v=G0WvooZfPRE'>here!</a></p>
      </div>

      <div id='ubhackingDetails'>
        <p className='photoText'>Here is my group photo from University at Buffalo's annual hackathon UB Hacking. UB Hacking had a great turnout this year with over 600 contestants competing for prizes from many sponsors including Google, Facebook, Bloomberd, and Twilio.</p>
        <p className='photoText'>I met my teamates over slack just days before the event started while I was looking for teamates who also wanted to try and win a prize.</p>
        <p className='photoText'>Colling Bolles was a freshman from the Rochester Institute of Technology interested in working on a javascript project. Mayank Jha is a sophomore at the University at Buffalo who works as a teaching assistant with my fourth group member Aamel Unia. Aamel is a senior at the Univeristy at Buffalo
        who had just accepted an internship with Bloomberg.</p>
        <p className='photoText'>In the next slide you will see a photo of our group presenting as finalists during the event.</p>`
      </div>

      <div id='ubhackingDetails'>
        <p className='photoText'>This is a photo of our group presenting our project "Whip" during Dandy Hack's closing ceremony.</p>
        <p className='photoText'>"Sketch It" is a whiteboarding service combined to connect users and allow them to simultaneously engage through a unique platform. This platform incoorperated real time messaging, real time shared whiteboard drawings, drawing to text, as well as many other features. Most of these features were built by implementing socket io.</p>
        <p className='photoText'>The judges of UB Hacking were so impressed by Sketch It that we made it to the finals and were able to demo our project. We won the third place prize!</p>
        <p className='photoText'>Sketch It was the first hackathon where we were able to actually get far enough to deploy our application. If you would like to try it out and actually use it (not mobile friendly) click the link <a className='demoLink' href='https://ubhacking2018.herokuapp.com/'>here!</a></p>
      </div>
    </div>
    */

  }
}

export default Hackathons;
