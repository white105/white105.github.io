import React, { Component } from 'react';
import { UserCard, RepoCard } from 'react-github-cards';
import { Carousel } from 'react-responsive-carousel';
import 'react-github-cards/dist/default.css';

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

        <div className='hackathonContainer'>

        <h2 className='hackathonTitle'>Hackathons</h2>
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} className='hackathonCarousel'>
                <div className='hackathonCarouselImageDiv'>
                    <img src={require('../../hackathon-pics/big_red.jpg')} className='hackathonCarouselImage' alt='#'/>
                    <div className="img__description" id='img_left_description'>
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
                </div>
                <div className='hackathonCarouselImageDiv'>
                    <img src={require('../../hackathon-pics/dandyhacksgroup.jpg')} className='hackathonCarouselImage' alt='#'/>
                    <div className="img__description" id='img_bottom_description'>
                    <p className='photoText'>This is a group photo of my teamates Michael Henry, Daniel Kiselev, and I during the second half of Dandy Hacks. Unfortunately our other team member Yipeng Zhang wasn't around for the picture, but he is certainly included in our presentational picture on the next slide.</p>
                    <p className='photoText'>Michael Henry and Daniel Kiselev are both seniors at the University of Rochester graduating in May of 2019 with Bachelors degrees in Computer Science. Yipeng Zhang is currently a sophomore at the University of Rochester expected to graduate with a degree in both Mathematics and Computer Science in 2021.</p>
                    <p className='photoText'>When I planned to come to Dandy Hacks, I came with the intention of winning an award after my first hackathon resulted in a loss the prior week. When I arrived I asked many teams if I could join, but there wasn't really a good fit for me anywhere. After talking to about twenty different teams I found Mike and Dan.
                    They said they were interested in trying to win an award and they already had the cool idea for our project. To make things easier on our team we decided to look for one more member. Yipeng was the first person I talked to and while he didn't have any prior javascript experience, he definitely seemed like a smart kid.</p>
                    <p className='photoText'>I never expected our team to do as well as we did. We all got along great and it was the most fun I've had at a hackathon so far. It was the perfect balance of work and fun which is exactly what a hackathon is supposed to be.</p>
                    <p className='photoText'>The next slide shows a picture of us giving a demo of our project "Whip" at the end of Dandy Hacks. It will also provide a description of the project as well as a link to the demo.</p>
                    </div>
                </div>
                <div className='hackathonCarouselImageDiv'>
                    <img src={require('../../hackathon-pics/presentation.jpg')} className='hackathonCarouselImage' alt='#'/>
                    <div className="img__description" id='img_top_description'>
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
                </div>
        </Carousel>

        <p className='imageDirections'><b>Hover over each image to see more information!</b></p>

        </div>

        <hr></hr>

        <h2 className='hackathonTitle'>Turtlebot Robotics 2018</h2>

        <video width = "500" height = "300" controls preload='preload' className='turtlebotVideo'>
         <source src = {require('../../turtlebot.mp4')} type = "video/mp4"></source>
         This browser doesn't support video tag.
         </video>

         <p className="projectsParagraph">During the Fall semester of 2017 I worked as a student researcher implementing turtlebot autonomy with ROS and Linux</p>

         <p className='projectsParagraph'><u>Contributions</u></p>
         <p className='projectsParagraph'>I helped assemble the original hardware and software including the asus camera, raspberry pi, and installation of Linux.
         I then worked through ROS tutorials and implemented mapping and navigation. Our research team consisted of four people and including myself, my classmate,
         and two professors.</p>



      </div>
    );
  }
}

export default Projects;
