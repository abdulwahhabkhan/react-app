import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/logos/logo.svg";
import {Container, Navbar,Nav, NavItem, NavLink} from "react-bootstrap";

const Header = (props) =>{
    return(
        <div>
            <Navbar variant={'transparent'} expand={'md'} fixed={'top'} className={'header'}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="brand-logo" className="brand-image"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className={'nav ml-md-auto'}>
                            <NavItem>
                                <NavLink as={Link} to="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink as={Link} to="/register">Register</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/*<div className="header navbar navbar-expand-md navbar-transparent fixed-top">
                <Container>
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
                </Container>
            </div>*/}
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