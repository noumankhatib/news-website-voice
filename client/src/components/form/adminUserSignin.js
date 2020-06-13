import React, { Component } from 'react';
import { loginAdmin } from '../utils/https-client';
import { Redirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirectToReferrer: false
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        loginAdmin(email, password)
            .then((result) => {
                if (result.success) {
                    alert("Successfully login")
                    this.setState({ redirect: true })

                } else {
                    alert("Authentication Failed")
                    this.setState({ redirect: false })
                }
            })
            .catch((error) => {
                alert("Authentication Failed")
                console.log("error occur while login ")
                this.setState({ redirect: false })
            });

    }

    render() {
        const { email, password } = this.state;

        if (this.state.redirect === true) {
            return <Redirect to="/" />
        }
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" value={email || ''} required onChange={this.handleChange} placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value={password || ''} required onChange={this.handleChange} placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <div className="form-group">

                        <p className="forgot-password text-left">Not Registered yet. <a href='/register'>Go to Registration?</a>
                        </p>

                    </div>
                </form>
            </React.Fragment>
        );
    }
}
export default Login