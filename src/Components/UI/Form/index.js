import React, {useState} from "react";
import {InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker/es";
import "react-datepicker/dist/react-datepicker.css";

const CalendarInput = (props) => {
    //const [startDate, setStartDate] = useState(new Date());

    return (
        <InputGroup className="mb-3">
            <DatePicker
                selected={props.value}
                className={'form-control'}
                onChange={date => props.changeHandler(props.name, date)}
                name={props.name}
                fixedHeight />
            <InputGroup.Append>
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                </InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default CalendarInput