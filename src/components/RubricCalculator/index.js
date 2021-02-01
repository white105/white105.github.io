/*
 * One of the main components of the application
 * Child component of Class and parent component of both RubricForm and RubricSection
 */

import React from "react";
import RubricSection from "../RubricSection/index";

class RubricCalculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			studentName: "",
			studentID: "",
			attributes: this.props.attributes,
			file_text: "",
			currentAttribute: "",
			currentAttributePath: "",
			formSubmitted: false,
			scores: [],
			clicks: undefined,
			showAlert: false,
		};

		this.get_child_data = this.get_child_data.bind(this);
		this.get_score = this.get_score.bind(this);
		this.submitGrade = this.submitGrade.bind(this);
		this.reset = this.reset.bind(this);
	}

	get_child_data(dataFromChild) {
		this.setState({
			studentName: "Nick",
			studentID: "123123",
			currentAttribute: "somethin",
			currentAttributePath: "hello",
			formSubmitted: true,
		});

		this.readTextFile("../../text_files/Core_Capstone_Rubric.txt");
	}

	get_score(position) {
		//this function could be optimized
		let clicks = this.state.clicks;
		let row_number = position[0];
		let column_number = position[1];

		//updates to clicks array
		for (var i = 0; i <= clicks[row_number].length; i++) {
			if (clicks[row_number][i] == true && i != column_number) {
				clicks[row_number][i] = false;
			} else if (i == column_number) {
				clicks[row_number][i] = !clicks[row_number][i];
			}
		}

		let scores = [];
		for (var i = 0; i < clicks.length; i++) {
			for (var j = 0; j < clicks[i].length; j++) {
				if (clicks[i][j] == true) {
					scores.push(`${i}${j}`);
				}
			}
		}

		scores.sort((a, b) => {
			return a[0] - b[0];
		});
		this.setState({ scores: scores, clicks: clicks });
	}

	submitGrade() {
		let isValid =
			this.state.studentName != "" &&
			this.state.studentID != "" &&
			this.props.crn != "" &&
			this.state.currentAttribute != "" &&
			this.state.scores != []
				? true
				: false;
		if (isValid) {
			this.gradeService.submitGrade(
				this.state.studentName,
				this.state.studentID,
				this.props.crn,
				this.state.currentAttribute,
				this.state.scores
			);
			this.setState({ showAlert: true });
			setTimeout(this.reset, 3000);
		}
	}

	reset() {
		//reset calculator component state and form component state
		this.setState({
			text: "",
			currentAttributePath: "",
			currentAttribute: "",
			attributeHasChanged: false,
			scores: [],
			clicks: undefined,
			showAlert: false,
		});
	}

	readTextFile(file) {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, true);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					let file_text = rawFile.responseText.split("\n");
					this.setState({ file_text: file_text });
					/*
          line below works if text files have no empty strings otherwise needs for loop
          this.createClicksArray(file_text.length)
          */
					let max_row = 0;
					for (var i = 0; i < file_text.length; i++) {
						if (file_text[i] != "") {
							max_row += 1;
						}
					}
					this.createClicksArray(max_row);
				}
			}
		};
		rawFile.send(null);
	}

	createClicksArray(numRows) {
		let clicks = [];
		for (var i = 0; i < numRows; i++) {
			clicks[i] = new Array();
			for (var j = 0; j <= 3; j++) {
				clicks[i][j] = false;
			}
		}
		this.setState({ clicks: clicks });
	}

	renderRow(rowNum, rowContent) {
		var row = [];
		var squareContent = rowContent.split("#");
		for (var key in squareContent) {
			let position = `${rowNum}${key}`;
			row.push(this.renderSection(position, squareContent[key], position));
		}
		return (
			<div className='rubricRow' key={rowNum}>
				{row.map(function (section) {
					return section;
				})}
			</div>
		);
	}

	renderSection(key, value, position) {
		let row_number = parseInt(position[0]);
		let column_number = parseInt(position[1]);
		let clicked = this.state.clicks[row_number][column_number];
		return (
			<RubricSection
				section_callback={this.get_score}
				key={key}
				value={value}
				position={position}
				clicked={clicked}
			/>
		);
	}

	render() {
		let file_text = this.state.file_text;
		let clicks = this.state.clicks;

		var rows = [];

		if (clicks != undefined) {
			for (var rowNum in file_text) {
				if (file_text[rowNum] != "") {
					rows.push(this.renderRow(rowNum, file_text[rowNum]));
				}
			}
		}

		let allContent =
			rows.length > 0
				? rows.map(function (row) {
						return row;
				  })
				: null;

		let semester = this.state.semesterIsFall ? "Fall" : "Spring";
		let alert_message = `Student: ${this.state.studentName}'s grade: [${this.state.scores}] for class: #${this.state.crnNumber} was successfully saved`;
		let student_scores = this.state.scores.map(function (score) {
			return (
				<h4 className='studentScore' key={`score${score[0]}${score[1]}`}>
					Row: {score[0]} | Score: {score[1]}
				</h4>
			);
		});

		return (
			<div className='rubricCalculatorDiv'>
				<div className='rubric'>
					<div className='rubricHeader'>
						<div className='rubricHeaderSection'>
							<h3 className='rubricHeaderSectionText'>
								Objectives: Students Will
							</h3>
						</div>
						<div className='rubricHeaderSection'>
							<h3 className='rubricHeaderSectionText'>
								Does not meet expectations
							</h3>
						</div>
						<div className='rubricHeaderSection'>
							<h3 className='rubricHeaderSectionText'>Meets expectations</h3>
						</div>
						<div className='rubricHeaderSection' id='rubricHeaderLastColumn'>
							<h3 className='rubricHeaderSectionText'>Exceeds expectations</h3>
						</div>
					</div>

					{allContent}

					<div id='studentScores'>
						<h4>Student Scores</h4>
						{student_scores}
					</div>

					<div className='footerButtons'>
						<button className='submitGrade' onClick={this.submitGrade}>
							Submit Student Grade
						</button>
						<button className='resetRubric' onClick={() => this.reset()}>
							Reset All Fields
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default RubricCalculator;
