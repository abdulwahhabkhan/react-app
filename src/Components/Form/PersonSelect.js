import React, {useState} from 'react';
import SelectSearch, { useSelect } from 'react-select-search';
import noPhoto from "../../images/icons/noPhoto2.png"
import {remove} from "lodash";

const PersonSelect = ({ options, value, multiple, disabled, placeholder, name, onChange }) => {

    const [state, setState] = useState('')

    function renderOption(props, option, snapshot, className) {
        const optionClass = 'filter-items__item-block '+className
        return (
            <React.Fragment >
                <button {...props} className={optionClass} type={'button'} >
                    <img src={noPhoto} alt="sample-img" className="filter-items__item-image"/>
                    {option.name}
                </button>
            </React.Fragment>

        );
    }

    const removeOption =(val, values)=>{
        onChange(values.map((r)=> r.value ).filter(v => v !== val))
    }
    const printOption = state ? 'always' : 'on-focus'
    return (
        <div>
           <SelectSearch
                options={options}
                value={value}
                name={name}
                multiple={multiple}
                search={true}
                onChange={onChange}
                placeholder={placeholder}
                printOptions={printOption}
                closeOnSelect={!multiple}
                renderOption={renderOption}
                renderValue={(valueProps, snapshot, className)=>{

                    const values =  Array.isArray(snapshot.value) ? snapshot.value : [snapshot.value]

                   return (
                        <div>
                            <ul className="filter-items-select">
                                { values.map((option)=>{
                                    value = "";

                                    return option && (
                                        <li key={option._id}>
                                            <button className="filter-items-item"
                                                    type={"button"} value={option.value}
                                                    onClick={()=> removeOption(option.value, values) }
                                            >
                                                <div className="filter-items-item-text">
                                                    <img src="https://support.webequator.com/images/noPhoto2.png" alt="sample-img" className="auto-complete-item-image"/>
                                                    <span className="auto-complete-item-title">
                                                        {  option.name }
                                                    </span>
                                                </div>
                                                <div className="filter-items-item-remove" >
                                                    <span className="filter-items-item-clear">
                                                        X
                                                    </span>
                                                </div>
                                            </button>
                                        </li>
                                    )
                                })}

                            </ul>
                            <input
                                {...valueProps}
                                onChange={(t)=>{
                                    valueProps.onChange(t);
                                    setState(t.target.value)
                                }}
                                onFocus={(e)=>{
                                    valueProps.onChange(e);
                                }}
                                onBlur={(e)=>{
                                    if(!state)
                                    valueProps.onBlur(e)
                                }}
                                value={state} className={'form-control form-control-sm'} />
                        </div>
                    )
                }}
            />
        </div>
    );
};

export default PersonSelect