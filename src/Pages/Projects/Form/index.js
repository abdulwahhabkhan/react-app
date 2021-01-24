import React, {Component} from "react";
import {Button, Modal, Form, Tabs, Tab, Row, Col, Alert} from "react-bootstrap";
import CalenderInput from '../../../Components/UI/Form';
import Select  from "react-select";
import settings from "../../../Config/settings";
import user from '../../../services/auth';
import SubmitButton from "../../../Components/Form/ButtonLoader";
import project from '../../../services/projects';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

class ProjectForm extends Component {

    state = {
        id: 0,
        name: '',
        description : '',
        start_date: '',
        end_date: '',
        owner: {'id':''},
        users : [],
        progress: 0,
        loading: false,
        activeTab : this.props.tab ? this.props.tab: 'description',
        errorMessage : '',
        errors:[],
        ...this.props.project
    }

    handleChange = (e)=>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    componentDidMount() {
        project.init();
        user.getUsers()
            .then(response => {
                this.setState({'users': response})
            })
    }

    handleDate = (name, val) =>{
        this.setState({ [name]: val });
    }

    saveFormHandler = () =>{
        this.setState({'loading': true});
        const data = {...this.state};
        data.owner = data.owner ? data.owner.id : '';

        project.saveProject(data)
            .then(response => {
                this.setState({'loading': false});
                console.log(response);
                this.props.onClose(false);
                this.props.onUpdate(response);
            })
            .catch(response => {
                const errors = response.response.data;
                this.setState({'loading': false});
                this.setState({'errorMessage': errors.message});
                this.setState({'errors': errors.errors});
            })
    }

    updateOwnerHandler = (val, action) =>{
        console.log('form ', val, action);

        switch (action.action) {
            case 'remove-value':
            case 'clear':
                this.setState({'owner': {'id': ''}});
                break;

            case "select-option":
                this.setState({'owner': val});
                console.log(this.state);
                break;

            default:
                break;
        }
    }


    render() {
        const title = this.props.project ? 'Edit Project' : 'Add Project'
        const errorMessage = this.state.errorMessage
        const errors = this.state.errors
        return (
            <Modal show={this.props.show} size={'lg'} centered onHide={()=> this.props.onClose(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" className="form-horizontal">
                        {
                            errorMessage !== "" && (
                                <Alert variant={'danger'}>
                                    <Alert.Heading as={'h6'}>{errorMessage}</Alert.Heading>
                                    {
                                        /*errors && (
                                            <ul>
                                                {errors.map((error, index)=><li key={index}>{error}</li>)}
                                            </ul>

                                        )*/
                                    }
                                </Alert>
                            )
                        }
                        <Form.Group>
                            <Form.Label>Project title is:</Form.Label>
                            <Form.Control value={this.state.name}
                                          name={'name'}
                                          placeholder={'like react application'}
                                          onChange={this.handleChange} />
                                          <Form.Control.Feedback type={'invalid'}>Required</Form.Control.Feedback>
                        </Form.Group>
                        <div className="nav-htabs">
                            <Tabs defaultActiveKey={this.state.activeTab} id="project_form_tabs">
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
                                            onChange={this.updateOwnerHandler}
                                            name={'owner'}
                                        />
                                    </Form.Group>
                                </Tab>
                                <Tab eventKey="progress" title="Progress">
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Project Progress:</Form.Label>
                                                <RangeSlider
                                                    step={5}
                                                    size={'lg'}
                                                    value={this.state.progress}
                                                    onChange={(e)=>{ this.handleDate('progress', e.target.value) } }
                                                    tooltipLabel={currentValue => `${currentValue}%`}
                                                    tooltip='on'
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
                    <Button variant="secondary" className={'mr-auto'} onClick={() => this.props.onClose(false)}>
                        Close
                    </Button>
                    <SubmitButton className={'btn btn-form'} type={'submit'} onClick={()=>this.saveFormHandler()} loading={this.state.loading}>Save Changes</SubmitButton>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ProjectForm