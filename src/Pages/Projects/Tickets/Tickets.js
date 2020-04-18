import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

class Tickets extends Component{
    render() {
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
            </React.Fragment>

        )
    }
}

export default Tickets