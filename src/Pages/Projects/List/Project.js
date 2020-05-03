import React from "react";
import {Link} from "react-router-dom";
import {Col, ProgressBar, Row, Popover, OverlayTrigger} from "react-bootstrap";
import Avatar from "react-avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faTimes, faPencilAlt, faCheck} from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {

    return (
        <Col lg={4} className={'projects'}>
            <div className="panel green">
                <div className="panel-body">
                    <Row>
                        <Col>
                            <div className={'title-link'}>
                                <Link to={'/projects/'+props.projectInfo.id+'/tickets'}>{props.projectInfo.name}</Link>
                            </div>
                            <div className={'project-details'}>
                                <Link to={'/projects/'+props.projectInfo.id+'/tickets'}>{props.projectInfo.description}</Link>
                            </div>
                            <Row className={'project-actions'}>
                                <Col sm={2}>
                                    <div className={'project-label'}>
                                        OWNER
                                    </div>
                                    {}
                                    <small>{ props.projectInfo.owner && <Avatar name={props.projectInfo.owner.name} size="25" textSizeRatio={1.2} round={true} style={{fontFamily:'inherit'}}  />}</small>
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
                                    <OverlayTrigger
                                        trigger="focus"
                                        placement="left"
                                        overlay={
                                            <Popover>
                                                <Popover.Content>
                                                    <ul className="popover-actions">
                                                        <li>
                                                            <FontAwesomeIcon icon={faTimes} size={'2x'} />
                                                            Delete
                                                        </li>
                                                        <li>
                                                            <FontAwesomeIcon icon={faPencilAlt} size={'2x'} />
                                                            Edit
                                                        </li>
                                                        <li>
                                                            <FontAwesomeIcon icon={faCheck} size={'2x'}  />
                                                            Complete
                                                        </li>
                                                    </ul>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <button className={'btn btn-sm btn-circle btn-default'}>
                                            <FontAwesomeIcon icon={faEllipsisV} />
                                        </button>
                                    </OverlayTrigger>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    );
};

export default Project;