import React, {useState} from 'react';
import { useSelect } from 'react-select-search';
import SelectSearch from 'react-select-search';
import {instanceOf} from "prop-types";

const PersonSelect = ({ options, value, multiple, disabled }) => {


    function renderOption(props, option, snapshot, className) {
        const imgStyle = {
            borderRadius: '50%',
            verticalAlign: 'middle',
            marginRight: 10,
        };
        console.log(props)
        return (
            <React.Fragment >

                <button {...props} className={'filter-items__item-block'} type={'button'} href={'#'}>
                    <img src="https://support.webequator.com/images/noPhoto2.png" alt="sample-img" className="filter-items__item-image"/>
                    {option.name}
                </button>
            </React.Fragment>

        );
    }

    function renderFriend(props, option, snapshot, className) {
        const imgStyle = {
            borderRadius: '50%',
            verticalAlign: 'middle',
            marginRight: 10,
        };

        return (
            <button {...props} className={'dropdown-item'} type="button">

                <span><span>{option.name}</span></span>
            </button>
        );
    }


    const [snapshot, valueProps, optionProps, doSearch] = useSelect({
        options: options,
        value,
        multiple,
        disabled,
        closeOnSelect: false,
        search: true
    });

    const [state, setState] = useState('')

    return (
        <div>
            {/*<div>
                <div className="selected">
                    { JSON.stringify(snapshot.value)}
                </div>
                <input {...valueProps} className={'form-control form-control-sm'} />
                {snapshot.focus && (
                    <ul>
                        {snapshot.options.map((option) => (
                            <li key={option.value}>
                                <button {...optionProps} value={option.value} className={'dropdown-item'} type="button">{option.name}</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>*/}
            <SelectSearch
                options={options}
                value={value}
                multiple={multiple}
                search={true}
                renderOption={renderOption}
                renderValue={(valueProps, snapshot, className)=>{

                    const values =  Array.isArray(snapshot.value) ? snapshot.value : [snapshot.value]

                   return (
                        <div>
                            <ul className="filter-items-select">
                                { values.map((option)=>{
                                    return (
                                        <li key={option._id}>
                                            <div className="filter-items-item">
                                                <div className="filter-items-item-text">
                                                    <img src="https://support.webequator.com/images/noPhoto2.png" alt="sample-img" className="auto-complete-item-image"/>
                                                    <span className="auto-complete-item-title">
                                                        {  option.name }
                                                    </span>
                                                </div>
                                                <div className="filter-items-item-remove">
                                                    <span className="filter-items-item-clear">
                                                        X
                                                    </span>
                                                </div>
                                            </div>
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
                                onBlur={(e)=>{
                                    //setState('')
                                    //valueProps.onBlur(e)
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