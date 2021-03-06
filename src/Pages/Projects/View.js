import React, {Component} from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import {NavLink, Route, Switch, Redirect} from "react-router-dom";
import {Row, Col} from "react-bootstrap";
import ProjectSideBar from './Sidebars/View';
import ProjectTickets from './Tickets';
import ProjectFiles from './Files';
import ProjectSummary from './Summary';
import ProjectTimes from './Times';

class View extends Component {
    state = {
        filters : {
            'keyword': 'project 1',
            'owner': {},
            'created_date': {},
            'due_date': {}
        }
    }
    baseRoute = this.props.match.url
    componentDidMount() {
        console.log(this.props.match)
    }

    searchProject = (e)=>{
        e.preventDefault()
        console.log(e)
    }

    resetSearch = (e)=>{
        e.preventDefault()
        console.log(e)
    }

    render() {
        return(
            <React.Fragment>
                <DashboardLayout sidebar={
                    <ProjectSideBar
                    filters={this.state.filters}
                    search={this.searchProject}
                    reset={this.resetSearch} />
                }>

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
                    <Switch>
                        <Route path={this.baseRoute+'/summary'} exact component={ProjectSummary}></Route>
                        <Route path={this.baseRoute+'/tickets'} exact component={ProjectTickets} />
                        <Route path={this.baseRoute+'/times'} exact component={ProjectTimes}></Route>
                        <Route path={this.baseRoute+'/files'} exact component={ProjectFiles}></Route>
                        <Redirect to={'/dashboard'}></Redirect>
                    </Switch>

                </DashboardLayout>
            </React.Fragment>
        )
    }
}

export default View