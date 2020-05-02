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
        </div>
    )
};


class AuthLayout extends Component {

    state = {
        isLogin: true
    }

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