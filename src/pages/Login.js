import React, { Component } from 'react'

import AuthService from '../services'

class Login extends Component {
<<<<<<< HEAD
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
=======
    constructor(props) {
        super(props)

        this.auth = new AuthService()
        this.state = {
            user: {
                email: "",
                password: ""
            }
        }
    }

    render() {
        let { email, password } = this.state.user
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
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
    handleChange = (event) => {
        // copy form from state
        let { user } = this.state

        // copy event target name and value (target will be a form field)
        let fieldName = event.target.name
        let inputValue = event.target.value

        console.log(inputValue, fieldName);

        // update form object with new value from user
        user[fieldName] = inputValue

        this.setState({user})
    }

    // when user submits form,
    handleSubmit = (e) => {
        e.preventDefault()
        // this function requires an email and password
        this.auth.login(this.state)
    }
>>>>>>> 1af8b2fadd347e3896afcbae554ff81562006e0a
}

export default Login
