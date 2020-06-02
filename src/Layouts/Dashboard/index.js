import React, {Component} from 'react'
import {Link, NavLink, Redirect } from "react-router-dom"
import 'react-notifications-component/dist/theme.css'
import {Dropdown} from 'react-bootstrap'
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome'

import logo from "../../images/logos/logo.svg"
import Sidebar from "../../Components/UI/Sidebar/Sidebar"
import Auth from "../../services/auth"
import ReactNotification from 'react-notifications-component'
import {faPowerOff, faUser} from "@fortawesome/free-solid-svg-icons";


const Header = (props) =>{

    return(
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
                                    <img src={logo} alt={props.user.name} className={'user-img rounded-circle'}/>
                                    <span>{props.user.name}</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <Dropdown.Item disabled>
                                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <span>Profile</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={ ()=> props.logout() }>
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
    )
};


class DashboardLayout extends Component {

    state = {
        settings : document.settings,
        user : Auth.getLoggedInUser()
    }

    logoutHandler=()=>{
        console.log("logout called")
        Auth.logout().then(res=>{
            this.setState({'user': ''});
        });
    }

    render() {
        let header = <Header user={this.state.user} logout={this.logoutHandler}/>;
        let sidebar = this.props.sidebar ? <Sidebar>{this.props.sidebar}</Sidebar> : null
        const wrapperclass = ['fixed-navbar', 'private']
        if (this.state.settings.sidebarMinified) wrapperclass.push('mini-sidebar')
        if (this.state.settings.hideSideBar) wrapperclass.push('no-sidebar')
        let logout = this.state.user ? '' : <Redirect  to={'/'}/>

        return (
            <div className={wrapperclass.join(' ')}>
                { logout }
                { header }
                <ReactNotification />
                <div className={''} id={'page-container'}>
                    <div className="content-wrapper">
                        {sidebar}
                        <div className="content animate-panel">
                            {this.props.children}
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default DashboardLayout;