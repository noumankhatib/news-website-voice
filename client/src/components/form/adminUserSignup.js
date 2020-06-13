import React, { Component } from "react";
import { registerAdmin } from '../utils/https-client';
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
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
        const { email, firstname, lastname, password } = this.state;

        const record = {
            email,
            firstname,
            lastname,
            password
        };
        registerAdmin(record)
            .then((result) => {
                alert(result);
                console.log("Success created");
            })
            .catch((error) => {
                alert("Error occur while login ")
                console.log("error occur while login ")
            });

    }


    render() {
        return (
            <React.Fragment>
                <form>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" name="firstname" onChange={this.handleChange} placeholder="First name" />

                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" name="lastname" onChange={this.handleChange} placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">sign in?</a>
                    </p>
                </form>
            </React.Fragment>
        );
    }
}