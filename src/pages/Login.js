import React, { Component } from 'react'

import AuthService from '../services'

class Login extends Component {
    constructor(props) {
        super(props)

        this.auth = new AuthService()
        this.state = {
            form: {
                email: "",
                password: ""
            }
        }
    }

    render() {
        let { email, password } = this.state.form
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
        // let { form } = this.state
        let formCopy = this.state.form

        // copy event target name and value (target will be a form field)
        let fieldName = event.target.name
        let inputValue = event.target.value

        console.log(inputValue, fieldName);

        // update form object with new value from user
        formCopy[fieldName] = inputValue

        this.setState({form : formCopy})
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
