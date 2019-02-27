import React, { Component } from 'react';

class Services extends Component {

  render() {

    /*<h3 id='servicesTitle'>What I Can Do For You</h3>*/
    return (
      <div className='servicesContainer'>
        <div className='homePageServices'>

          <div className='homePageService'>
            <img className='serviceImage' src={require('../../assets/service-icons/blue-web.png')}></img>
            <h3 className='homePageServiceTitle'>Web</h3>
            <p className='homePageServiceDetails'>I can develop high quality and scalable online applications in almost any tech stack</p>
            <h4 className='servicePrice'>$25/Hour</h4>
          </div>

          <div className='homePageService'>
            <img className='serviceImage' src={require('../../assets/service-icons/blue-mobile.png')}></img>
            <h3 className='homePageServiceTitle'>Mobile</h3>
            <p className='homePageServiceDetails'>I can develop high quality mobile applications in both
            IOS, react native, and ionic. </p>
            <h4 className='servicePrice'>$25/Hour</h4>
          </div>

          <div className='homePageService'>
            <img className='serviceImage' src={require('../../assets/service-icons/blue-ui-ux.png')}></img>
            <h3 className='homePageServiceTitle'>UI/UX Design</h3>
            <p className='homePageServiceDetails'>Need a fresh new look?
  I can design your website and/or app and make it into a brand.</p>
            <h4 className='servicePrice'>$25/Hour</h4>
          </div>

        </div>

        <button onClick={this.activateContactForm} id='contactButton'>Contact Me!</button>

      </div>
    );
  }
}

export default Services;
