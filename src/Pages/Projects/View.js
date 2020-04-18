import React, {Component} from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import {NavLink, Route} from "react-router-dom";
import {Row, Col} from "react-bootstrap";
//import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
//import {faEdit} from "@fortawesome/free-solid-svg-icons";
import ProjectSideBar from './Sidebars/View';


class View extends Component {
    state = {}
    baseRoute = this.props.match.url
    componentDidMount() {
        console.log(this.props.match)
    }

    render() {
        return(
            <React.Fragment>
                <DashboardLayout sidebar={<ProjectSideBar></ProjectSideBar>}>
                    {/*<div className="small-header">
                        <div className="panel dark">
                            <div className="panel-heading">
                                Young, Stewart and Morgan
                                <div className="panel-tools">
                                    <a href="">
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                    <Row>
                        <Col sm={12}>
                            <div className="nav-htabs">
                                <ul className="nav nav-tabs">
                                    <li className={'nav-item'}>
                                        <NavLink to={this.baseRoute+'/summary'} className={'nav-link'}>Summary</NavLink>
                                    </li>
                                    <li className={'nav-item'}>
                                        <NavLink to={this.baseRoute+'/tickets'} className={'nav-link'}>Tickets</NavLink>
                                    </li>
                                    <li className={'nav-item'}>
                                        <NavLink to={this.baseRoute+'/times'} className={'nav-link'}>Time</NavLink>
                                    </li>
                                    <li className={'nav-item'}>
                                        <NavLink to={this.baseRoute+'/files'} className={'nav-link'}>Files</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Route path={this.baseRoute+'/summary'} component={()=><h2>Summary Comp</h2>}></Route>
                    <Route path={this.baseRoute+'/tickets'} component={()=><h2>Tickets Comp</h2>}></Route>
                    <Route path={this.baseRoute+'/times'} component={()=><h2>Times Comp</h2>}></Route>
                    <Route path={this.baseRoute+'/files'} component={()=><h2>Files Comp</h2>}></Route>
                </DashboardLayout>
            </React.Fragment>
        )
    }
}

export default View