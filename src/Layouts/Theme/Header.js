import React from "react"
import {Link, NavLink} from "react-router-dom";
import logo from "../../images/logos/logo.svg";
import {Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPowerOff, faUser} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";

const Header = ({logout})=>{
    const user = useSelector(({auth})=> auth.user )
    const userInfo = user.data ? user.data : {}
    return(
        <React.Fragment>
            <div className="navbar fixed-top bg-dark top-nav navbar-expand-md">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="brand-logo" className="brand-image"/>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id={'navbarCollapse'}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/dashboard" activeClassName={'active'} className="nav-link">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link">Projects</NavLink>
                        </li>
                    </ul>
                    <div className="navbar-right pull-right">

                        <ul className="nav navbar-nav no-borders">
                            <li className="nav-item dropdown dropdown-authentication show">


                            </li>
                            <li>
                                <Dropdown alignRight>
                                    <Dropdown.Toggle id="dropdown-custom-1" className={'user-nav nav-link'} as={'div'}>
                                        <img src={userInfo.photo} alt={userInfo.name} className={'user-img rounded-circle'}/>
                                        <span>{userInfo.name}</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        <Dropdown.Item disabled>
                                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <span>Profile</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={ ()=> logout() }>
                                            <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon> <span>Logout</span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>

                    </div>
                    {/*<Nav className="ml-auto">

                    <NavDropdown title={props.user.name} id="basic-nav-dropdown" className={'nav-link dropdown-toggle user-nav no-caret'}>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>*/}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header