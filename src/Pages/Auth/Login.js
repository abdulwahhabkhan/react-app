import React, {Component} from "react";
import {Link} from "react-router-dom";
import AuthLayout from "../../Layouts/Auth";
import Auth from '../../services/auth';


import logo from '../../logo.svg'

class  Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
            'submitted': false,
            'error' : ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        Auth.init();
    }

    handleChange = (e)=>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password} = this.state;

        // stop here if form is invalid
        if (!(email && password)) {
            return;
        }

        this.setState({ loading: true });
        /*Auth.signInWithEmailAndPassword(email, password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
                    this.props.history.push(from);
                },
                error => this.setState({ error, loading: false })
            );*/
    }

    render() {
        const { email, password, submitted,  error } = this.state;
        let isValid = 'true';
        if (!(email && password)) {
            isValid = false;
        }
        return (
            <React.Fragment>
                <AuthLayout type="auth">
                    <div className="auth-content">
                        <div className="greetings">
                            <img src={logo} alt="React Logo" className="w-128"/>
                            <h3>Welcome to ReactJS</h3>
                            <p>Connecting the ReactJS application with Laravel APIs</p>
                        </div>
                        <div className="form" onSubmit={this.handleSubmit}>
                            {error &&
                            <div className={'alert alert-danger'}>{error}</div>
                            }
                            <div className="p-30 pt-128">
                                <h6 className="mb-36">LOGIN TO YOUR ACCOUNT</h6>
                                <form action="" className="">
                                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                        <label htmlFor="email" className="">Username</label>
                                        <input type="text" name="email" id="email" value={email} className="form-control" onChange={this.handleChange}/>
                                    </div>
                                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                        <label htmlFor="password" className="">Password</label>
                                        <input type="password" name="password" id="password" value={password} className="form-control" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <button className={'btn btn-form btn-block ' + (isValid? '': 'disabled')}>Login</button>
                                    </div>
                                </form>
                                <div className="flex flex-column items-center justify-center pt-32">
                                    <span className="font-medium">Don't have an account?</span>
                                    <Link to="/register" className="font-medium">Create an Account</Link>
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

export default Login;