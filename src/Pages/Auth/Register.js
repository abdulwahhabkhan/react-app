import React, {Component} from "react";
import {Link} from "react-router-dom";
import AuthLayout from "../../Layouts/Auth";

import logo from '../../logo.svg'

class  Register extends Component {
    render() {
        return (
            <React.Fragment>
                <AuthLayout type="auth">
                    <div className="auth-content">
                        <div className="greetings">
                            <img src={logo} alt="React Logo" className="w-128"/>
                            <h3>Welcome to ReactJS</h3>
                            <p>Connecting the ReactJS application with Laravel APIs</p>
                        </div>
                        <div className="form">
                            <div className="p-30 pt-128">
                                <h6 className="mb-36">CREATE AN ACCOUNT</h6>
                                <form action="" className="">
                                    <div className="form-group">
                                        <label htmlFor="email" className="">Email</label>
                                        <input type="text" name="email" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="">Password</label>
                                        <input type="password" name="password" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="">Confirm Password</label>
                                        <input type="password" name="confirm_password" className="form-control"/>
                                    </div>
                                    <div className="form-group">

                                        <button className="btn btn-primary btn-block">Register</button>
                                    </div>
                                </form>
                                <div className="flex flex-column items-center justify-center pt-32">
                                    <span className="font-medium">Don't have an account?</span>
                                    <Link to="/login" className="font-medium">Login</Link>
                                    <Link to="/" className="font-medium">Back to Dashboard</Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </AuthLayout>
            </React.Fragment>
        );
    }
}

export default Register;