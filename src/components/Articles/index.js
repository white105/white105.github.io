import React, { Component } from 'react';

class Articles extends Component {

  render() {
    return (
      <div id='articleDiv'>
        <blockquote class="embedly-card"><h4><a href="https://www.linkedin.com/pulse/introduction-web-programming-part-3-css-basics-nicholas-white/">Introduction to Web Programming - Part 3 (CSS Basics)</a></h4><p>The previous article can be found at the link below https://www.linkedin.com/pulse/introduction-web-programming-part-2-html-basics-nicholas-white/</p></blockquote>
        <blockquote class="embedly-card"><h4><a href="https://www.linkedin.com/pulse/introduction-web-programming-part-2-html-basics-nicholas-white/">Introduction to Web Programming - Part 2 (HTML basics)</a></h4><p>Article 2 In my last article we began our journey into the world of web computing by building a simple Hello World application. This time we're going</p></blockquote>
        <blockquote class="embedly-card"><h4><a href="https://www.linkedin.com/pulse/introduction-web-programming-nicholas-white/">Introduction to Web Programming</a></h4><p>This is going to be a series of articles dedicated to teaching the basics of web programming. Articles in this series are going to be posted twice</p></blockquote>
      </div>
    );
  }
}

export default Articles;
