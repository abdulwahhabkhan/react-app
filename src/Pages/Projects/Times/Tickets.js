import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

class Times extends Component{
  render() {
    return(
        <React.Fragment>
          <Row>
            <Col sm={12}>
              <div className="list-options">
                <h2>Times</h2>
              </div>
            </Col>
          </Row>
        </React.Fragment>

    )
  }
}

export default Times