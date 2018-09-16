/*
* Child component -> each individual square of the rubric
* Recieves a clicked value based on position in parent component clicks array
* Modifies parent array through callback function section_callback (reference : sectionClicked())
*/

import React from 'react'

class RubricSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: (this.props.clicked == false || this.props.clicked == true) ? this.props.clicked : false
    }
    this.sectionClicked = this.sectionClicked.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.clicked != nextProps.clicked) {
      this.setState({ clicked: (nextProps.clicked == false || nextProps.clicked == true) ? nextProps.clicked : false })
    }
  }

  sectionClicked() {
    this.props.section_callback(this.props.position)
  }

  render() {
    let bgColor = this.state.clicked ? '#003C71' : 'white'
    let textColor = this.state.clicked ? 'white' : 'black'
    let column_number = this.props.position[1]
    if (column_number == 0) {
      return (
        <div className='rubricObjectives'>
          <p className='rubricObjectivesText'>{this.props.value}</p>
        </div>
      )
    } else if (column_number == 1 || column_number == 2) {
      return (
        <div className='rubricSection'>
          <p className='rubricSectionText' style={{backgroundColor: bgColor, color: textColor}} onClick={this.sectionClicked}>
            {this.props.value}
          </p>
        </div>
      )
    } else if (column_number == 3) {
      return (
        <div className='rubricSectionFinalColumn'>
          <p className='rubricSectionFinalColumnText' style={{backgroundColor: bgColor, color: textColor}} onClick={this.sectionClicked}>
            {this.props.value}
          </p>
        </div>
      )
    } else {
      console.log('Error: Component rendering incorrectly')
      return ( <div></div> )
    }
  }
}
export default RubricSection
