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
    window.open('mailto:nickwhite1423@gmail.com');
    this.setState({ contactFormActive : true })
  }


  sendContactMessage() {
    if (this.senderName != '' && this.senderSubject != '' && this.senderMessage != '') {
      var file = new File("./message.txt");
      file.open("w")
      var str = this.state.senderName + this.senderSubject + this.senderMessage
      file.write(str);
      file.close()


      this.setState({senderName: '',
      senderSubject: '',
      senderMessage: ''})
    }
  }



  render() {

    return (
      <div className='homePageContainer'>



      </div>
    )
  }
}

export default Home;
