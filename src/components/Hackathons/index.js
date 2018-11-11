import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class Hackathons extends Component {

  render() {
    return (
      <div>

        <div className='hackathonContainer'>

        <h2 className='hackathonTitle'>Hackathons</h2>
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} className='hackathonCarousel'>
                <div className='hackathonCarouselImageDiv'>
                    <img src={require('../../hackathon-pics/dandyhacksgroup.jpg')} className='hackathonCarouselImage' alt='#'/>
                    <div className="img__description" id='img_bottom_description'>
                    <p>Group photo of my teamates Michael Henry, Daniel Kiselev, and I during the second half of Dandy Hacks.</p>
                    <div class='logoAbsoluteContainer'>
                    <img src={require('../../hackathon-pics/wip_logo.png')} className='whipLogoHover'></img>
                    </div>
                    "Whip" is a utility application that utlizes several data sources and APIs to inform Uber/Lyft drivers about the best times and locations to work
                    </div>
                </div>
                <div className='hackathonCarouselImageDiv'>
                    <img src={require('../../hackathon-pics/presentation.jpg')} className='hackathonCarouselImage' alt='#'/>
                    <div className="img__description" id='img_top_description'>
                    Presenting our project "Sketch It" during UB Hacking's closing ceremony.
                    <div class='logoAbsoluteContainer'>
                    <img src={require('../../hackathon-pics/wip_logo.png')} className='whipLogoHover'></img>
                    </div>
                    "Whip" is a utility application that utlizes several data sources and APIs to inform Uber/Lyft drivers about the best times and locations to work
                    </div>
                    </div>
                <div className='hackathonCarouselImageDiv'>
                    <img src={require('../../hackathon-pics/big_red.jpg')} className='hackathonCarouselImage' alt='#'/>
                    <div className="img__description" id='img_left_description'>
                    Presenting our project "Sketch It" during UB Hacking's closing ceremony.
                    <div class='logoAbsoluteContainer'>
                    <img src={require('../../hackathon-pics/wip_logo.png')} className='whipLogoHover'></img>
                    </div>
                    "Whip" is a utility application that utlizes several data sources and APIs to inform Uber/Lyft drivers about the best times and locations to work
                    </div>
                </div>
                <div className='hackathonCarouselImageDiv'>
                    <img src={require('../../hackathon-pics/ub_present.JPG')} className='hackathonCarouselImage' alt='#'/>
                    <div className="img__description" id='img_right_description'>
                    Presenting our project "Sketch It" during UB Hacking's closing ceremony.
                    <div class='logoAbsoluteContainer'>
                    <img src={require('../../hackathon-pics/wip_logo.png')} className='whipLogoHover'></img>
                    </div>
                    "Whip" is a utility application that utlizes several data sources and APIs to inform Uber/Lyft drivers about the best times and locations to work
                    </div>
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
      </div>
    );
  }
}

export default Hackathons;
