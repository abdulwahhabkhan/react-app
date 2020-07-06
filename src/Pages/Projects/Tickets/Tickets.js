import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import BlankSlate from "../../../Components/UI/Slate/BlankSlate";
import listing from '../../../images/icons/listings.svg'
import {useSelector} from "react-redux";

const BlankTickets = (props)=>{
    const user = useSelector(({auth})=> auth.user )
    const name = user.data ? user.data.name : '';
    return (
        <BlankSlate image={listing}>
            <h3>No Tickets</h3>
            <p>Hey {name}, you don't have any ticket on this project. Click the button below to create a ticket.</p>
            <button className={'btn btn-lg btn-primary'}>
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> &nbsp; Create a new ticket
            </button>
        </BlankSlate>
    )
}

class Tickets extends Component{
    state = {
        tickets: []
    }
    render() {
        let ticketsList = '';
        if(this.state.tickets.length > 0)
            ticketsList = <BlankSlate image={listing}>This is blank If</BlankSlate>
        else
            ticketsList = <BlankTickets />
        const loading = '';
        return(
            <React.Fragment>
                <Row>
                    <Col sm={12}>
                        <div className="list-options">
                            <h2>Tickets</h2>
                            <div className="btn-options text-right">
                                <button className="btn btn-md btn-success">
                                    <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> Add Ticket
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="panel forum-box">
                            <div className="panel-body">
                                <div className="ticketslist">
                                    {loading}
                                    {ticketsList}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>

        )
    }
}

export default Tickets