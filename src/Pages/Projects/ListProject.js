import React from "react";
import {Col, ProgressBar, Row} from "react-bootstrap";
import Avatar from "react-avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";

const ListProject = (props) => {
    return (
        <Col lg={4} className={'projects'}>
            <div className="panel green">
                <div className="panel-body">
                    <Row>
                        <Col>
                            <div className={'title-link'}>{props.projectInfo.name}</div>
                            <div className={'project-details'}>
                                {props.projectInfo.description}
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

export default ListProject;