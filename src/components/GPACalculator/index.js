import React, { Component } from 'react';

class GPACalculator extends Component {

  constructor() {
    super()

    this.state = {
      total_gpa : 0,
      num_rows: 1
    }

    this.addClass = this.addClass.bind(this)
    this.calculate = this.calculate.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.reset = this.reset.bind(this)

    /* render methods */

    this.renderCourseInput = this.renderCourseInput.bind(this)
    this.renderGPAInput = this.renderGPAInput.bind(this)
    this.renderCreditsInput = this.renderCreditsInput.bind(this)
  }


  addClass() {
    this.setState({ num_rows : this.state.num_rows + 1})
  }

  calculate() {

    let gpa_data = document.getElementsByClassName('gpaInput')
    let credits_data = document.getElementsByClassName('creditsInput')

    console.log('gpa data', gpa_data)
    console.log('credits data', credits_data)

    let total_points = 0
    let total_credits = 0

    for (var i=0; i<Math.min(gpa_data.length, credits_data.length); i++) {
      if (credits_data[i].value > 0) {
        total_credits += parseFloat(credits_data[i].value)
        total_points += parseFloat(gpa_data[i].value * credits_data[i].value)
      }
    }

    let total_gpa = parseFloat(total_points / total_credits)

    this.setState({ total_gpa : total_gpa.toFixed(3) })


    /*

    GPA formula

    total points / credits attempted = GPA

    to calculate course points = num_credits * gpa

    */

    console.log('calculating gpa...')
  }

  renderCourseInput(i) {
    return(<input type='text' className='courseInput'></input>)
  }

  renderGPAInput(i) {
    return(<input type='text' className='gpaInput'></input>)
  }

  renderCreditsInput(i) {
    return(<input type='text' className='creditsInput'></input>)
  }

  reset() {
    this.setState({ num_rows: 1 })
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {

    let course_list = []
    let gpa_list = []
    let credits_list = []

    for (var i=0; i<this.state.num_rows; i++) {
      course_list.push(this.renderCourseInput(i))
      gpa_list.push(this.renderGPAInput(i))
      credits_list.push(this.renderCreditsInput(i))
    }

    let course_content = (this.state.num_rows > 0) ? course_list.map(function(course) { return course } ) : null
    let gpa_content = (this.state.num_rows > 0) ? gpa_list.map(function(gpa) { return gpa } ) : null
    let credits_content = (this.state.num_rows > 0) ? credits_list.map(function(credits) { return credits } ) : null


    return (
      <div className="App">
        <h1 id='appTitle'>GPA Calculator</h1>


        <div className='calculator'>

          <div className='column' id='column1'>
            <h3 className='columnTitle'>Course</h3>
            {course_content}
          </div>

          <div className='column' id='column2'>
            <h3 className='columnTitle'>GPA</h3>
            {gpa_content}
          </div>


          <div className='column' id='column3'>
            <h3 className='columnTitle'>Credits</h3>
            {credits_content}
          </div>


        </div>

        <div className='buttonsDiv'>

          <button className='calculatorButton' id='addClassButton' onClick={this.addClass}>Add class</button>
          <button className='calculatorButton' id='calculateButton' onClick={this.calculate}>Calculate</button>
          <button className='calculatorButton' id='resetButton' onClick={this.reset}>Reset Fields</button>

        </div>

        <h3 className='gpaHeader'>GPA - {this.state.total_gpa}</h3>

      </div>
    );
  }
}

export default GPACalculator;
