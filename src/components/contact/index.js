import { h, Component } from 'preact';
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const overRideStyles = {
	width100: {
		width: '100%'
	},
	floatRight: {
		float: 'right'
	}
};

export default class FormContact extends Component {
	handleUserInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState(
			{ [name]: value },
			() => this.validateField(name, value)
		);
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let nameValid = this.state.nameValid;

		switch (fieldName) {
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : ' please use a valid email';
				break;
			case 'name':
				nameValid = value.length >= 1;
				fieldValidationErrors.name = nameValid ? '' : ' is too short';
				break;
			default:
				break;
		}
		this.setState({
			formErrors: fieldValidationErrors,
			emailValid,
			nameValid
		}, this.validateForm);
	}

	validateForm() {
		this.setState({ formValid: this.state.emailValid && this.state.nameValid });
	}

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			formErrors: { name: '', email: '' },
			emailValid: false,
			nameValid: false,
			formValid: false
		};

		this.handleUserInput = this.handleUserInput.bind(this);
	}

	render() {
		return (
			<section>
				<TextField
					hintText={this.state.nameValid ? '' : 'Name'}
					errorText={this.state.formErrors.name}
					name="name"
					onChange={this.handleUserInput}
					style={overRideStyles.width100}
				/> <br />
				<TextField
					hintText={this.state.emailValid ? '' : 'Contact Email'}
					errorText={this.state.formErrors.email}
					name="email"
					onChange={this.handleUserInput}
					style={overRideStyles.width100}
				/> <br />
				<TextField
					name="text"
					floatingLabelText="Short Message"
					multiLine
					rows={10}
					style={overRideStyles.width100}
				/> <br />
				<RaisedButton
					label="Contact"
					disabled={!this.state.formValid}
					style={overRideStyles.floatRight}
				/>
			</section>
		);
	}
}