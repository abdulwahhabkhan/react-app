import React from "react";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import {InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons"
import settings from "../../../../Config/storage"

const getName = (name, label)=>{
    return (!name || 0 === name.length) ? label.toLowerCase() : name;
}



export const FormDate = ({name, size, register, initialValue, updateDate}) => {

    const renderInput = (props, openCalendar, closeCalendar) => {

            function clear() {
                props.onChange({ target: { value: "" } });
            }
            return (
                <div>
                    <InputGroup>
                        <input type="text" {...props}/>
                        <InputGroup.Append>
                            <div className="btn btn-default btn-sm" onClick={openCalendar}>
                                <FontAwesomeIcon icon={faCalendar}/>
                            </div>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            );
        }

    return(
        <Datetime
            initialValue={initialValue}
            renderInput={renderInput}
            inputProps={{className: 'form-control form-control-'+size, ref: register, name:name, placeholder:'Select date'}}
            onChange={updateDate}
            dateFormat={settings.FORM_DATE_FROMAT}
            closeOnSelect={true}
            timeFormat={false}/>
            )
}

export const FormDateRange = ({name, label, size, register, start, end})=>{
    const start_name = getName(name, label)+'_start_date'
    const end_name = getName(name, label)+'_end_date'

    return(
        <div className="date-range">
            <div className="date-range-block">
                <div className="input-group date">
                    <label className="label">{label} After</label>
                    <FormDate
                        name={start_name}
                        size={size}
                        register={register}
                        initialValue={start}
                    />
                </div>
            </div>
            <div className="date-range-block">
                <div className="input-group date">
                    <label className="label">{label} Before</label>
                    <FormDate
                        name={end_name}
                        size={size}
                        register={register}
                        initialValue={end}
                    />
                </div>
            </div>
        </div>
    )
}

export default FormDate
