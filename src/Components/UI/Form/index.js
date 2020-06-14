import React from "react";
import {InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker/es";
import "react-datepicker/dist/react-datepicker.css";

const CalendarInput = (props) => {
    //const [startDate, setStartDate] = useState(new Date());
    const  c_date = props.value ? new Date(props.value) : '';

    return (
        <InputGroup className="mb-3">
            <DatePicker
                selected={c_date}
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

export const DateRange = (props) => {
    const label = props.label
    const start_name = label+'_start_date'
    const end_name = label+'_start_date'


    return (
        <div className="date-range">
            <div className="date-range-block">
                <div className="input-group date">
                    <label className="label">{props.label} After</label>
                    <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon={faCalendar} />
                            </div>
                        </div>
                        <DatePicker
                            onChange={(data) => props.startChanged(data)}
                            name={start_name}
                            selected={props.start}
                            className="form-control form-control-sm"
                            placeholderText="Select date"
                            ref={props.register}
                        />
                        {/*<Controller
                            as={DatePicker}
                            control={control}

                            onChange={([selected]) => props.startChanged(selected)}
                            name={start_name}
                            className="form-control form-control-sm"
                            placeholderText="Select date"
                        />*/}
                    </div>
                </div>
            </div>
            <div className="date-range-block">
                <label className="label">{props.label} Before</label>
                <div role="group" className="input-group input-group-sm">
                    <div  className="input-group-prepend">
                        <div className="input-group-text">
                            <FontAwesomeIcon icon={faCalendar} />
                        </div>
                    </div>
                    <DatePicker
                        onChange={(data) => props.startChanged(data)}
                        name={end_name}
                        selected={props.end}
                        className="form-control form-control-sm"
                        placeholderText="Select date"
                        ref={props.register}
                    />
                    {/*<Controller
                        as={DatePicker}
                        control={control}

                        onChange={([selected]) => props.endChanged(selected)}
                        name={end_name}
                        className="form-control form-control-sm"
                        placeholderText="Select date"
                    />*/}
                </div>
            </div>
        </div>
    )
}

export default CalendarInput

