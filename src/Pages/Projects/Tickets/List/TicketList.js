import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";


const TicketList = (props)=>{
    const {title, assigned_to} = props.ticketInfo
    return (
        <div className={'ticket-wrapper'}>
            <div className="ticket-row">
                <div className="ticket-controls">

                        <button className={'edit btn no-padding'}>
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </button> &nbsp;
                        <button className={'delete btn no-padding'}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>

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
        </div>

    )
}

export default TicketList