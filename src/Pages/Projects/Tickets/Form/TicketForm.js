import React from "react";
import {Button, Form, Modal, Tab, Tabs, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import SubmitButton from "../../../../Components/Form/ButtonLoader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignLeft, faUser} from "@fortawesome/free-solid-svg-icons";

const TicketForm = (props) =>{

    const state = {
        loading: false,
        activeTab: 'description'
    }

    const saveFormHandler = ()=>{

    }

    const title = props.ticket ? 'Edit Ticket' : 'Add Ticket';

    return(
        <Modal show={props.show} size={'lg'} centered onHide={()=> props.onClose(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="" className="form-horizontal">
                    <Form.Group>
                        <Form.Label>Ticket title is:</Form.Label>
                        <Form.Control value={state.name}
                                      name={'name'}
                                      placeholder={'What needs to be done?'}
                        />
                    </Form.Group>
                    <div className="nav-htabs">
                        <Tabs defaultActiveKey={state.activeTab} id="ticket_form_tabs">
                            <Tab eventKey="description" title={
                                <OverlayTrigger placement={'top'} overlay={
                                    <Tooltip>Description</Tooltip>
                                }>
                                    <FontAwesomeIcon icon={faAlignLeft} />
                                </OverlayTrigger>
                            }>
                                <Form.Group>
                                    <Form.Label>Provide a detailed description for this task (optional) </Form.Label>
                                    <Form.Control as="textarea" name={'description'}
                                                  value={state.description}
                                                   />
                                </Form.Group>
                            </Tab>

                            <Tab eventKey="owner" title={
                                <OverlayTrigger placement={'top'} overlay={
                                    <Tooltip>Who & When</Tooltip>
                                }>
                                    <FontAwesomeIcon icon={faUser} />
                                </OverlayTrigger>

                            }>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Assigned To </Form.Label>
                                            <Form.Control name={'assigned_to'}
                                                          value={state.description}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Start Date </Form.Label>
                                            <Form.Control name={'assigned_to'}
                                                          value={state.description}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>End Date </Form.Label>
                                            <Form.Control name={'assigned_to'}
                                                          value={state.description}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                            </Tab>
                        </Tabs>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className={'mr-auto'} onClick={() => props.onClose(false)}>
                    Close
                </Button>
                <SubmitButton className={'btn btn-form'} type={'submit'} onClick={()=>saveFormHandler()} loading={state.loading}>Save Changes</SubmitButton>
            </Modal.Footer>
        </Modal>
    )
}

export default TicketForm