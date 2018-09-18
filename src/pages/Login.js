import React, { Component } from 'react'

import AuthService from '../services'

class Login extends Component {
	constructor(props) {
		super(props)

		this.auth = new AuthService()
		this.state = {
			loginSuccess: false,
			errors: "",
			form: {
				email: "",
				password: "",
			}
		}
	}

	render() {

		let { email, password } = this.state.form

		return (
			<main>
				<h2>Login here.</h2>
				<form onSubmit={ this.handleSubmit }>
					<input
						type="email"
						name="email"
						value={ email }
						onChange={ this.handleChange }
					/>
					<input
						type="password"
						name="password"
						value={ password }
						onChange={ this.handleChange }
					/>
					<input
						type="submit"
						value="Login"
					/>
				</form>
			</main>
		)
	}

	// track each keystroke, save the value to state
	handleChange = (e) => {

		// copy form from state
		let formCopy = this.state.form

		// copy event target name and value (target will be a form field)
		let fieldName = e.target.name
		let inputValue = e.target.value

		// update form object with user input value (form.email = value)
		formCopy[fieldName] = inputValue

		// replace 'old' state with new copy of state
		this.setState({ form: formCopy })
	}

	// when user submits form,
	handleSubmit = (e) => {
		e.preventDefault()
		let { email, password } = this.state.form

		// this function requires an email and password
		this.auth.login(email, password)
	}
}

export default Login
