import React, {Component} from "react";
import {Button, Modal, Form, Tabs, Tab, Row, Col} from "react-bootstrap";
import CalenderInput from '../../../Components/UI/Form';
import Select  from "react-select";
import settings from "../../../Config/settings";
import user from '../../../services/auth'

class ProjectForm extends Component {

    state = {
        name: '',
        description : '',
        start_date: '',
        end_date: '',
        owner: {'id':0},
        users : [],
        loading: false,
        ...this.props.project
    }

    handleChange = (e)=>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    componentDidMount() {
        if(!this.props.project) {
            console.log("Add project")
        }
        user.getUsers()
            .then(response => {
                this.setState({'users': response})
            })
    }

    handleDate = (name, val) =>{
        this.setState({ [name]: val });
    }
    activeTab = 'description'

    render() {
        const title = this.props.project ? 'Edit Project' : 'Add Project';
        return (
            <Modal show={this.props.show} size={'lg'} centered onHide={()=> this.props.onclose(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" className="form-horizontal">
                        <Form.Group>
                            <Form.Label>Project title is:</Form.Label>
                            <Form.Control placeholder={''} value={this.state.name}
                                          name={'name'}
                                          onChange={this.handleChange} />
                        </Form.Group>
                        <div className="nav-htabs">
                            <Tabs defaultActiveKey={this.activeTab} id="project_form_tabs">
                                <Tab eventKey="description" title="Description">
                                    <Form.Group>
                                        <Form.Label>Provide a Description </Form.Label>
                                        <Form.Control as="textarea" name={'description'}
                                                      value={this.state.description}
                                                      onChange={this.handleChange} />
                                    </Form.Group>
                                </Tab>
                                <Tab eventKey="date" title="Date">
                                    <Row>
                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Label>Start Date</Form.Label>
                                                <CalenderInput
                                                    placeholder={''}
                                                    name={'start_date'}
                                                    value={this.state.start_date}
                                                    formate={settings.FORMDATEFROMAT}
                                                    changeHandler={this.handleDate}
                                                />

                                            </Form.Group>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Label>End Date</Form.Label>
                                                <CalenderInput
                                                    name={'end_date'}
                                                    value={this.state.end_date}
                                                    changeHandler={this.handleDate}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="owner" title="Owner">
                                    <Form.Group>
                                        <Form.Label>Owner</Form.Label>
                                        <Select
                                            options={this.state.users}
                                            isLoading={this.state.loading}
                                            isClearable
                                            defaultValue={[this.state.owner]}
                                            getOptionValue={option => option['id']}
                                            getOptionLabel={option => option['name']}
                                            name={'owner'}
                                        />
                                    </Form.Group>
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