import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../../images/logos/logo.svg";
import Sidebar from "../../Components/UI/Sidebar/Sidebar";
import Auth from "../../services/auth"

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
                            <div  className="nav-link dropdown-toggle user-nav no-caret">
                                <span>{props.user.name}</span>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};


class DashboardLayout extends Component {

    state = {
        settings : window.settings,
        user : Auth.getLoggedInUser()
    }

    render() {
        let header = <Header user={this.state.user}/>;
        let sidebar = this.props.sidebar ? <Sidebar>{this.props.sidebar}</Sidebar> : null
        const wrapperclass = ['fixed-navbar', 'private']
        if (this.state.settings.sidebarMinified) wrapperclass.push('mini-sidebar')
        if (this.state.settings.hideSideBar) wrapperclass.push('no-sidebar')

        return (
            <div className={wrapperclass.join(' ')}>
                { header }
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