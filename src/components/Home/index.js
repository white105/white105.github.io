import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div style={{'display' : 'flex', 'flex-direction': 'column', 'justify-content': 'center'}}>

        <h4 style={{'text-align': 'center'}}>Hey there, welcome to my personal website!</h4>
        <p style={{'text-align': 'center', 'width' : '30rem', 'margin': 'auto'}}>My name is Nick. I'm a student at the University at Buffalo pursuing a bachelors degree
          in computer science and engineering. If you'd like to learn more about me, please feel free to navigate through the site
        using the tabs above. For more information feel free to contact me through my social links below.</p>

      </div>
    )
  }
}

export default Home;
