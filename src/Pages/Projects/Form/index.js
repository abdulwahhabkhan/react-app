import React, {Component} from "react";
import {Button, Modal, Form, Tabs, Tab, Row, Col} from "react-bootstrap";
import CalenderInput from '../../../Components/UI/Form';

class ProjectForm extends Component {

    project = {
        name: '',
        description : '',
        start_date: '',
        end_date: '',
        owner: '',
        ...this.props.project
    }

    activeTab = 'description'

    render() {
        return (
            <Modal show={this.props.show} size={'lg'} centered onHide={()=> this.props.onclose(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" className="form-horizontal">
                        <Form.Group>
                            <Form.Label>Project title is:</Form.Label>
                            <Form.Control placeholder={''}></Form.Control>
                        </Form.Group>
                        <div className="nav-htabs">
                            <Tabs defaultActiveKey={this.activeTab} id="project_form_tabs">
                                <Tab eventKey="description" title="Description">
                                    <Form.Group>
                                        <Form.Label>Provide a Description </Form.Label>
                                        <Form.Control as="textarea"></Form.Control>
                                    </Form.Group>
                                </Tab>
                                <Tab eventKey="date" title="Date">
                                    <Row>
                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Label>Start Date</Form.Label>
                                                <CalenderInput>
                                                    <Form.Control placeholder={''}></Form.Control>
                                                </CalenderInput>

                                            </Form.Group>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Label>End Date</Form.Label>
                                                <CalenderInput>
                                                    <Form.Control placeholder={''}></Form.Control>
                                                </CalenderInput>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="owner" title="Owner">
                                    Tab data
                                </Tab>
                                <Tab eventKey="progress" title="Progress">
                                    Tab data
                                </Tab>
                            </Tabs>
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className={'mr-auto'} onClick={() => this.props.onclose(false)}>
                        Close
                    </Button>
                    <Button variant="success">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ProjectForm