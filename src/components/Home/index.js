import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

/*
<h4 className='homePageHeader'>Welcome to my personal site!</h4>
<p className='homePageParagraph'>My name is Nick. I'm a software engineer and full stack developer who specializes in javascript development.
If you're interested in freelance/contracted work please see the services I offer below and proceed to the contact section.
If you'd like to learn more about me, please feel free to navigate through the site
using the tabs above. For more information you can contact me through the social links below.</p>


<hr id='homePageSep'></hr>
*/

class Home extends Component {

  constructor() {
    super()
    this.state = {
      contactFormActive : false,
      senderName: '',
      senderSubject: '',
      senderMessage: ''
    }


    this.activateContactForm = this.activateContactForm.bind(this)

  }


  activateContactForm() {
    this.setState({ contactFormActive : true })
  }


  sendContactMessage() {
    if (this.senderName != '' && this.senderSubject != '' && this.senderMessage != '') {
      //actually send message
    }
  }

  

  render() {

    var contactForm = undefined

    if (this.state.contactFormActive) {
      contactForm = <div className='contactFormContainer'>
        <h3 className='contactInputTitle'>Name</h3>
        <input className='contactInput' placeHolder="Enter your name"></input>
        <h3 className='contactInputTitle'>Subject</h3>
        <input className='contactInput' placeHolder="Subject"></input>
        <h3 className='contactInputTitle'>Message</h3>
        <textarea id='contactTextArea' placeHolder="Message"></textarea>

        <button id='sendContactMessage'>Send Message</button>
      </div>
    }
    return (
      <div className='homePageContainer'>

        <h3 id='servicesTitle'>What I Can Do For You</h3>
        <div className='homePageServices'>
          <div className='homePageService'>
            <img className='serviceImage' src={require('../../web.png')}></img>
            <h3 className='homePageServiceTitle'>Web</h3>
            <p className='homePageServiceDetails'>I can develop high quality and scalable online applications in almost any tech stack</p>
            <h4 className='servicePrice'>$25/Hour</h4>
          </div>
          <div className='homePageService'>
            <img className='serviceImage' src={require('../../mobile.png')}></img>
            <h3 className='homePageServiceTitle'>Mobile</h3>
            <p className='homePageServiceDetails'>I can develop high quality mobile applications in both
            IOS, react native, and ionic. </p>
            <h4 className='servicePrice'>$25/Hour</h4>
          </div>
          <div className='homePageService'>
            <img className='serviceImage' src={require('../../ui_ux.png')}></img>
            <h3 className='homePageServiceTitle'>UI/UX Design</h3>
            <p className='homePageServiceDetails'>Need a fresh new look?
I can design your website and/or app and make it into a brand.</p>
            <h4 className='servicePrice'>$25/Hour</h4>
          </div>

        </div>

        <button onClick={this.activateContactForm} id='contactButton'>Contact Me!</button>

        {contactForm}

      </div>
    )
  }
}

export default Home;
