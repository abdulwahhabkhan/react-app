import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignLeft, faPencilAlt, faTrashAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import {Button, Col, Form, Modal, OverlayTrigger, Row, Tab, Tabs, Tooltip} from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import SubmitButton from "../../../../Components/Form/ButtonLoader";


const TicketList = (props)=>{
    const {title, assigned_to} = props.ticketInfo
    const ticketInfo = {...props.ticketInfo}
    const { handleSubmit, register, control, errors} = useForm({defaultValues: ticketInfo})

    const [data, setData] = useState({
        edit: false,
        activeTab: 'description'
    });
    const users = [
        { id: '', label: 'Anyone', img: '' },
        { id: '1', label: 'Abdul Khan', img: '' },
    ]

    const ticketEdit = ()=>{
        console.log("edit flat enabled")
        setData({edit: true})
    }

    const colourStyles= {
        control: (provided, state) => {
            return ({
                ...provided,
                minHeight: '32px'
            })
        }
    }

    const ticketForm = data.edit ? (
        <div className={'ticket-edit'}>
            <div className="ticket-row">
                <div className="ticket-controls">
                       &nbsp;
                </div>
                <div className="ticket-heading">
                    <div className="ticket-title">
                        <Form.Control name={'title'} ref={register({required:'required'})} size={'sm'} />
                    </div>
                </div>
            </div>
            <div className="ticket-description">
                <div className="ticket-desc">
                    <div className="hpanel mb-3">
                        <Tabs defaultActiveKey={data.activeTab} id="ticket_form_tabs">
                            <Tab eventKey="owner" title={
                                <OverlayTrigger placement={'top'} overlay={
                                    <Tooltip>Who & When</Tooltip>
                                }>
                                    <FontAwesomeIcon icon={faUser} />
                                </OverlayTrigger>

                            }>
                                <Row>
                                    <Col md={9} lg={7}>
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
                                    </Col>

                                </Row>

                            </Tab>
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
                                                  ref={register()}
                                    />
                                </Form.Group>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="ticket-save">
                        <SubmitButton className={'btn btn-form'} type={'submit'} form={'project_add_form'} loading={data.loading}>Save Changes</SubmitButton>
                        <span className="mr-2 ml-2">or</span>
                        <Button variant="default" className={'mr-auto'} onClick={()=> setData({edit: false})}>
                            Cancel
                        </Button>
                    </div>

                </div>
            </div>

        </div>
    ) : null
    const ticketRow = data.edit ? null : (
        <div className="ticket-row">
            <div className="ticket-controls">

                        <span className={'edit btn no-padding'} onClick={()=> ticketEdit() }>
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </span> &nbsp;
                <span className={'delete btn no-padding'}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </span>

            </div>
            <div className="estimate">10 Hours</div>
            <div className="ticket-heading">
                <div className="assignedto">
                    <span>{ assigned_to ? assigned_to.name : 'Any one' }</span>
                </div>
                <div className="ticket-title">
                    <p className={'title'}>{title}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className={'ticket-wrapper'}>
            {ticketForm}
            {ticketRow}
        </div>

    )
}

export default TicketList