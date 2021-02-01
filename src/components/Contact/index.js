import React, { Component } from "react";
import * as emailjs from "emailjs-com";

class Contact extends Component {
	constructor() {
		super();

		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
		};

		this.sendMessage = this.sendMessage.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	sendMessage() {
		if (
			this.state.name != "" &&
			this.state.email != "" &&
			this.state.subject != "" &&
			this.state.message != ""
		) {
			console.log("Here!");

			console.log("this.state.name", this.state.name);
			console.log("this.state.subject", this.state.subject);
			console.log("this.state.message", this.state.message);
			console.log("this.state.email", this.state.email);

			var template_params = {
				reply_to: this.state.email,
				from_name: this.state.name,
				to_name: "nickwhite1423@gmail.com",
				message_html: this.state.message,
			};

			var service_id = "default_service";
			var template_id = "template_vuhp2BRO";
			emailjs.send(service_id, template_id, template_params).then(
				function (response) {
					console.log("SUCCESS!", response.status, response.text);
				},
				function (error) {
					console.log("FAILED...", error);
				}
			);

			var oReq = new XMLHttpRequest();
			oReq.open("GET", "http://www.example.org/example.txt/?");
			oReq.send();
		}
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	render() {
		return (
			<div className='contactFormContainer'>
				<h3 className='contactInputTitle'>Name</h3>
				<input
					onChange={this.handleInputChange}
					name='name'
					value={this.state.name}
					className='contactInput'
					placeholder='Enter your name'
				></input>
				<h3 className='contactInputTitle'>Email</h3>
				<input
					onChange={this.handleInputChange}
					name='email'
					value={this.state.email}
					className='contactInput'
					placeholder='Enter your email address'
				></input>
				<h3 className='contactInputTitle'>Subject</h3>
				<input
					onChange={this.handleInputChange}
					name='subject'
					value={this.state.subject}
					className='contactInput'
					placeholder='Subject'
				></input>
				<h3 className='contactInputTitle'>Message</h3>
				<textarea
					onChange={this.handleInputChange}
					name='message'
					value={this.state.message}
					id='contactTextArea'
					placeholder='Message'
				></textarea>

				<button onClick={this.sendMessage} id='sendContactMessage'>
					Send Message
				</button>
			</div>
		);
	}
}

export default Contact;
