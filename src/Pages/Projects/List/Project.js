import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Col, ProgressBar, Row, Popover, OverlayTrigger} from "react-bootstrap";
import Avatar from "react-avatar";
import Moment from 'react-moment';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faTimes, faPencilAlt, faCheck} from "@fortawesome/free-solid-svg-icons";
import settings from "../../../Config/settings";

const Project = (props) => {
    const [show, setShow] = useState(false);
    const status = new Date(props.projectInfo.end_date) > new Date() ? 'green' : 'orange'
    const handleClick = (event) => {
        setShow(!show);
    };
    return (
        <Col lg={4} className={'projects'}>
            <div className={'panel '+status }>
                <div className="panel-body">
                    <Row>
                        <Col>
                            <div className={'title-link'}>
                                <Link to={'/projects/'+props.projectInfo.id+'/tickets'}>{props.projectInfo.name}</Link>
                            </div>
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
                                        <Moment
                                            format={settings.DATEFROMAT}
                                            date={props.projectInfo.end_date} />
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
                                        //trigger={['focus', 'click']}
                                        placement="left"
                                        show={show}
                                        delay={200}
                                        overlay={
                                            <Popover>
                                                <Popover.Content>
                                                    <ul className="popover-actions">
                                                        <li onClick={()=>{handleClick();props.onDelete(props.projectInfo.id);}}>
                                                            <FontAwesomeIcon icon={faTimes} size={'2x'} />
                                                            Delete
                                                        </li>
                                                        <li onClick={()=>{handleClick();props.onEdit(props.projectInfo)}}>
                                                            <FontAwesomeIcon icon={faPencilAlt} size={'2x'} />
                                                            Edit
                                                        </li>
                                                        <li onClick={()=>{handleClick();props.onComplete(props.projectInfo.id)}}>
                                                            <FontAwesomeIcon icon={faCheck} size={'2x'}  />
                                                            Complete
                                                        </li>
                                                    </ul>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <button className={'btn btn-sm btn-circle btn-default'} onClick={handleClick}>
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