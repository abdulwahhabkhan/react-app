import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Row, Col} from "react-bootstrap";

import {renderRoutes} from "react-router-config";

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
    params = this.props.match.params
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
                <div className="list-options">
                    <div className={'title'}>{this.params.id} project name</div>
                </div>

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
                {renderRoutes(this.props.route.routes)}
            </React.Fragment>
        )
    }
}

export default View