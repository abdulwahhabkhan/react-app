import React, {Component} from 'react';
import {Row, Col, ProgressBar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faArrowDown, faArrowUp, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import Avatar from 'react-avatar';

import DashboardLayout from "../../Layouts/Dashboard";
import project from "../../services/projects";

const ListProject = (props) => {
    return (
        <Col lg={4} className={'projects'}>
            <div className="panel green">
                <div className="panel-body">
                    <Row>
                        <Col>
                            <h5>{props.projectInfo.name}</h5>
                            <div className={'project-details'}>
                                {props.projectInfo.description}
                            </div>
                            <Row className={'project-actions'}>
                                <Col sm={2}>
                                    <div className={'project-label'}>
                                        OWNER
                                    </div>
                                    {}
                                    <small>{ props.projectInfo.owner && <Avatar name={props.projectInfo.owner.name} size="25" textSizeRatio={1.2} round={true}  />}</small>
                                </Col>
                                <Col sm={4}>
                                    <div className={'project-label'}>
                                        DEADLINE
                                    </div>
                                    <small>
                                       { props.projectInfo.end_date }
                                    </small>
                                </Col>
                                <Col sm={4}>
                                    <div className={'project-label'}>
                                        PROGRESS
                                    </div>
                                    <ProgressBar className={'m-t-xs'} now={props.projectInfo.progress} label={`${props.projectInfo.progress}%`} variant="success" />
                                </Col>
                                <Col sm={2} className={'text-right'}>
                                    <div className={'project-label'}>
                                        &nbsp;
                                    </div>
                                    <span className={'btn btn-sm btn-circle btn-default'}>
                                        <FontAwesomeIcon icon={faEllipsisV} />

                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    );
};

class Projects extends Component {

    constructor(props) {
        super(props);
        project.init();
    }

    state = {
        projects : {data:[]}
    };

    componentDidMount() {
        project.getProjects().then(response => {
            this.setState({projects : response});
        });


    }

    render() {
        let projects = (
            this.state.projects.data.map((project, index) => {
                return <ListProject
                        projectInfo={project}
                        key={project.id} />
            })
        );


        return (
            <React.Fragment>
                <DashboardLayout sidebar={'show'}>
                    <Row>
                        <Col className={''} sm={12}>
                            <div className="list-options">
                                <h2>Current Projects</h2>
                                <div className="btn-options text-right">
                                    <button className="btn btn-md btn-primary w-10">
                                        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> Add Project
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="nav-htabs">
                                <ul className="nav nav-tabs">
                                    <li className={'nav-item'}>
                                        <div className="nav-link active">Current</div>
                                    </li>
                                    <li className={'nav-item'}>
                                        <div className="nav-link">Completed</div>
                                    </li>
                                </ul>

                            </div>
                            <div className="tab-content">
                                <Row>
                                    <Col sm={12}></Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <div className="list-options">
                                            <div>{ this.state.projects.total ? this.state.projects.total: '...' } results</div>
                                            <div className="btn-options text-right">
                                                <div className="sort-filter">
                                                    <div className="dropdown btn-group b-dropdown">
                                                        <button className={'btn dropdown-toggle btn-default btn-sm'}>
                                                            <strong className={'text-bold'}>Sort By: </strong>
                                                            Created Date
                                                        </button>
                                                    </div>
                                                    <button className="btn btn-default btn-sm">
                                                        <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                                                    </button>
                                                    <button className="btn btn-default btn-sm">
                                                        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={'list'}>
                                    {projects}
                                </Row>
                            </div>
                        </Col>

                    </Row>

                </DashboardLayout>
            </React.Fragment>
        );
    }
}

export default  Projects;