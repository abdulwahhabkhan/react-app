import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/logos/logo.svg";;

const Header = (props) =>{
    return(
        <div className="header navbar navbar-expand-md navbar-transparent fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="brand-logo" className="brand-image"/>
                    </Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav ml-md-auto">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};


class AuthLayout extends Component {

    render() {
        let header = <Header/>;
        if(this.props.type !== 'welcome')
            header = "";
        return (
            <div>
                { header }
                <div className={this.props.type  === 'welcome' ? 'content has-bg home' : 'content auth-bg'}>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default AuthLayout;