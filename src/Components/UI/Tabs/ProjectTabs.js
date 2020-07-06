import React from 'react'
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const ProjectTabs = (props) => {
    return (
        <React.Fragment >
            <div className="list-options">
                <div className={'title'}>{props.project.name}</div>
            </div>
            <Row>
                <Col sm={12}>
                    <div className="nav-htabs">
                        <ul className="nav nav-tabs">
                            <li className={'nav-item'}>
                                <NavLink to={'/projects/'+props.project.id+'/summary'} className={'nav-link'}>Summary</NavLink>
                            </li>
                            <li className={'nav-item'}>
                                <NavLink to={'/projects/'+props.project.id+'/tickets'} className={'nav-link'}>Tickets</NavLink>
                            </li>
                            <li className={'nav-item'}>
                                <NavLink to={'/projects/'+props.project.id+'/times'} className={'nav-link'}>Time</NavLink>
                            </li>
                            <li className={'nav-item'}>
                                <NavLink to={'/projects/'+props.project.id+'/files'} className={'nav-link'}>Files</NavLink>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ProjectTabs