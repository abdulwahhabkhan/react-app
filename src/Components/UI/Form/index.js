import React from "react";
import {InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker/es";
import "react-datepicker/dist/react-datepicker.css";
import settings from "../../../Config/settings";

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
                dateFormat={''}
                fixedHeight />
            <InputGroup.Append>
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                </InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    )
}

export const DateRange = ({label, startChanged, start, end, endChanged, control, Controller }) => {

    const start_name = label.toLowerCase()+'_start_date'
    const end_name = label.toLowerCase()+'_end_date'

    return (
        <div className="date-range">
            <div className="date-range-block">
                <div className="input-group date">
                    <label className="label">{label} After</label>
                    <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon={faCalendar} />
                            </div>
                        </div>
                        <Controller
                            as={DatePicker}
                            dateFormat={settings.FORMDATEFROMAT}
                            defaultValue={start ? new Date(start) : start}
                            fixedHeight
                            control={control}
                            valueName="selected" // DateSelect value's name is selected
                            onChange={([selected]) => selected}
                            name={start_name}
                            className="form-control form-control-sm"
                            placeholderText="Select date"
                        />
                    </div>
                </div>
            </div>
            <div className="date-range-block">
                <label className="label">{label} Before</label>
                <div role="group" className="input-group input-group-sm">
                    <div  className="input-group-prepend">
                        <div className="input-group-text">
                            <FontAwesomeIcon icon={faCalendar} />
                        </div>
                    </div>
                    <Controller
                        as={DatePicker}
                        dateFormat={settings.FORMDATEFROMAT}
                        fixedHeight
                        valueName="selected" // DateSelect value's name is selected
                        onChangeRaw={([selected]) => selected}
                        control={control}
                        name={end_name}
                        defaultValue={end ? new Date(end) : end}
                        className="form-control form-control-sm"
                        placeholderText="Select date"
                    />
                </div>
            </div>
        </div>
    )
}

export default CalendarInput

