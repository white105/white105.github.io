/*
 * Child component of RubricCalculator used to gather data
 * Send data back to parent through callback function form_callback (reference : send_child_data)
 */

import React from "react";
import { Link } from "react-router-dom";

class RubricForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			studentName: "",
			studentID: "",
			currentAttribute: "Select Attribute Above",
			currentAttributePath: "",
			attributes: this.props.attributes,
		};

		this.attributesHelper = new AttributesHelper();

		this.send_child_data = this.send_child_data.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.renderMenuSection = this.renderMenuSection.bind(this);
	}

	send_child_data() {
		if (
			this.state.studentName != "" &&
			this.state.studentID != "" &&
			this.state.currentAttributePath != ""
		) {
			let data = [
				this.state.studentName,
				this.state.studentID,
				this.state.currentAttribute,
				this.state.currentAttributePath,
			];
			this.props.form_callback(data);
		}
	}

	change_attribute(attribute, path) {
		this.setState({ currentAttribute: attribute, currentAttributePath: path });
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	resetForm() {
		this.setState({
			studentName: "",
			studentID: "",
			currentAttribute: "",
			currentAttributePath: "",
		});
	}

	renderMenuSection(file_path, field_name) {
		return (
			<div
				onClick={() => this.change_attribute(field_name, file_path)}
				key={field_name}
			>
				{field_name}
			</div>
		);
	}

	render() {
		let text_files = this.attributesHelper.getTextFiles();

		//attribute menu
		var menu_content = [];
		for (var i = 0; i < this.state.attributes.length; i++) {
			for (var j = 0; j < text_files.length; j++) {
				if (this.state.attributes[i] == text_files[j][1]) {
					menu_content.push(
						this.renderMenuSection(text_files[j][0], text_files[j][1])
					);
				}
			}
		}
		let all_menu_content = menu_content.map(function (section) {
			return section;
		});

		return (
			<div className='rubricForm'>
				<div className='rubricInputsDiv'>
					<div className='rubricInputDiv'>
						<h3 className='rubricInputText'>Enter Student Name</h3>
						<input
							className='rubricInputTextField'
							name='studentName'
							onChange={this.handleInputChange}
							value={this.state.studentName}
						></input>
					</div>
					<div className='rubricInputDiv'>
						<h3 className='rubricInputText'>Enter Student ID</h3>
						<input
							className='rubricInputTextField'
							name='studentID'
							onChange={this.handleInputChange}
							value={this.state.studentID}
						></input>
					</div>
				</div>

				<div className='attributesDiv'>
					<div className='vertical-menu'>{all_menu_content}</div>
				</div>

				<div className='rubricFormAttributeDiv'>
					<h4 className='rubricFormAttribute'>
						Attribute : {this.state.currentAttribute}
					</h4>
				</div>

				<div className='rubricFormButtonDiv'>
					<div className='buttonCenteringDiv'>
						<button className='rubricFormSubmit' onClick={this.send_child_data}>
							Submit
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default RubricForm;
