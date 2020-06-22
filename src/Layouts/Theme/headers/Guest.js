import React from "react"
import {Container, Nav, Navbar, NavItem, NavLink} from "react-bootstrap";
import logo from "../../../images/logos/logo.svg";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const GuestHeader = ()=>{
    const user = useSelector(({auth})=> auth.user )

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
                            {
                                user.data && (
                                    <NavItem>
                                        <NavLink as={Link} to="/dashboard">Dashboard</NavLink>
                                    </NavItem>
                                )
                            }
                            {
                                !user.data && (
                                    <NavItem>
                                        <NavLink as={Link} to="/login">Login</NavLink>
                                    </NavItem>

                                )
                            }
                            {/*<NavItem>
                                <NavLink as={Link} to="/register">Register</NavLink>
                            </NavItem>*/}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default GuestHeader