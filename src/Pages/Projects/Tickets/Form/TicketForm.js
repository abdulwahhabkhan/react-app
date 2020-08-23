import React from "react";
import {Button, Form, Modal, Tab, Tabs, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import SubmitButton from "../../../../Components/Form/ButtonLoader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignLeft, faUser} from "@fortawesome/free-solid-svg-icons";
import {useForm, Controller} from "react-hook-form";
import Select  from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TicketService from "../../../../services/tickets"
import {store as notify} from 'react-notifications-component';

const TicketForm = (props) =>{

    TicketService.init()

    const ticketInfo = {
        'title': '',
        'description': '',
        'start_date': '',
        'end_date': '',
        'assigned': {id: '', 'label': 'Anyone', 'img': ''}
    };
    const { handleSubmit, register, control, errors} = useForm({defaultValues: ticketInfo})

    const state = {
        loading: false,
        activeTab: 'description'
    }

    const users = [
        { id: '', label: 'Anyone', img: '' },
        { id: '1', label: 'Abdul Khan', img: '' },
    ]

    const onSubmit = data => {
        state.loading = true;

        TicketService.saveTicket({...data, project_id : props.project_id, 'assigned_to': data.assigned.id})
            .then(response => {
                state.loading = false;
                notify.addNotification({
                    ...document.settings.NOTIFY,
                    type: 'success',
                    title: "Success",
                    message: "Ticket save successfully"
                })
                props.onClose(false);
            })
            .catch(response => {
                //this.setState({'loading': false});
                //todo: show errors
            })
    }

    const title = props.ticket ? 'Edit Ticket' : 'Add Ticket';
    const colourStyles= {
        control: (provided, state) => {
            return ({
                ...provided,
                minHeight: '32px'
            })
        }
    }
    return(
        <Modal show={props.show} size={'lg'} centered onHide={()=> props.onClose(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="" className="form-horizontal" id={'project_add_form'} onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Ticket title is:</Form.Label>
                        <Form.Control value={state.name}
                                      className={
                                          {'is-invalid' : errors.title}
                                      }
                                      name={'title'}
                                      ref={register({required: "Required"})}
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
                                    <Form.Label>Provide a detailed description for this task <small>(optional)</small></Form.Label>
                                    <Form.Control as="textarea" name={'description'}
                                                  ref={register}
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
                                            <Controller
                                                as={Select}
                                                options={users}
                                                name="assigned"
                                                isClearable
                                                theme={theme => ({
                                                    ...theme,
                                                    borderRadius: "0.125rem",
                                                    colors: {
                                                        ...theme.colors,
                                                        primary: '#00addd',
                                                        primary25: '#fff'
                                                    },
                                                })}
                                                getOptionValue={option => option['id']}
                                                control={control}
                                                styles={colourStyles}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Start Date </Form.Label>
                                            <Controller
                                                as={DatePicker}
                                                control={control}
                                                valueName="selected" // DateSelect value's name is selected
                                                onChange={([selected]) => selected}
                                                name="start_date"
                                                className="form-control"
                                                placeholderText="Select date"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>End Date </Form.Label>
                                            <Controller
                                                as={DatePicker}
                                                control={control}
                                                valueName="selected" // DateSelect value's name is selected
                                                onChange={([selected]) => selected}
                                                name="end_date"
                                                className="form-control"
                                                placeholderText="Select date"
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
                <Button variant="default" className={'mr-auto'} onClick={() => props.onClose(false)}>
                    Close
                </Button>
                <SubmitButton className={'btn btn-form'} type={'submit'} form={'project_add_form'} loading={state.loading}>Save Ticket Info</SubmitButton>
            </Modal.Footer>
        </Modal>
    )
}

export default TicketForm