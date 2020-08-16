import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import BlankSlate from "../../../Components/UI/Slate/BlankSlate";
import listing from '../../../images/icons/listings.svg'
import {useSelector} from "react-redux";
import TicketForm from "./Form";
import {connect} from "react-redux";
import { getTickets } from "./store/actions";
import ticket from "../../../services/tickets";
import Loading from "../../../Components/UI/Loader/Loading";
import TicketList from "./List";


const BlankTickets = (props)=>{
    const user = useSelector(({auth})=> auth.user )
    const name = user.data ? user.data.name : '';
    return (
        <BlankSlate image={listing}>
            <h3>No Tickets</h3>
            <p>Hey {name}, you don't have any ticket on this project. Click the button below to create a ticket.</p>
            <button className={'btn btn-lg btn-primary'} onClick={props.addTicket}>
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> &nbsp; Create a new ticket
            </button>
        </BlankSlate>
    )
}

class Tickets extends Component{
    state = {
        showAddTicket: false
    }

    componentDidMount() {
        ticket.init()
        this.getTickets({})
    }

    addTicketHandler = ()=>{
        this.setState({showAddTicket: true})
    }

    getTickets = (params)=>{
        this.props.loadTickets(params)
    }

    render() {
        const {rows} = this.props.tickets
        let ticketsList = '';
        if(rows.length > 0)
            ticketsList = (
                rows.map((ticket, index) => {
                    return <TicketList
                        ticketInfo={ticket}
                        key={ticket.id}
                    />
                })
            )
        else if(!this.state.showAddTicket && !this.props.tickets.loading)
            ticketsList = <BlankTickets addTicket={this.addTicketHandler}  />

        let ticketform = '';
        if(this.state.showAddTicket)
            ticketform = <TicketForm />

        return(
            <React.Fragment>
                <Row>
                    <Col sm={12}>
                        <div className="list-options">
                            <h2>Tickets</h2>
                            <div className="btn-options text-right">
                                <button className="btn btn-md btn-success" onClick={()=> this.addTicketHandler()}>
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
                                <div className="tickets-list">
                                    <Loading show={this.props.tickets.loading}>Tickets Loading</Loading>
                                    { ticketform }

                                    { ticketsList }
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        tickets :  state.tickets.ticket
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadTickets: params => dispatch(getTickets(params)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)
