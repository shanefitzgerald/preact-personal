import { h, Component } from 'preact';
import style from './style';

import FormErrors from './error';

export default class Form extends Component {
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
				fieldValidationErrors.email = emailValid ? '' : ' is invalid';
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
			<form className="demoForm">
				<div class={style.form__group}>
					<label htmlFor="email">Name</label>
					<input type="name" class={style.form__control} name="name" value={this.state.name} onChange={this.handleUserInput} />
				</div>
				<div class={style.form__group}>
					<label htmlFor="email">Email address</label>
					<input type="email" class={style.form__control} name="email" value={this.state.email} onChange={this.handleUserInput} />
				</div>
				<button type="submit" class="btn btn-primary" disabled={!this.state.formValid}>
          Sign up
				</button>
				<div class="panel panel-default">
					<FormErrors formErrors={this.state.formErrors} />
				</div>
			</form>

			// <form onSubmit={this.handleSubmit} style={style.form}>
			// 	<h1>Contact Shane Fitzgerald</h1>
			// 	<input placeholder="Name" type="text" value="" required />
			// 	<input placeholder="Email address" type="email" onblur="this.setAttribute('value', this.value);" value="" required />
			// </form>
		);
	}
}