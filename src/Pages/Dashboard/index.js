import React, {Component} from 'react';
import {Row, Col} from "react-bootstrap";

import DashboardLayout from "../../Layouts/Dashboard";

class Dashboard extends Component {

    componentDidMount() {
        //document.title = 'Dashboard - React App';
        window.settings.setTitle('Dashboard');
    }

    render() {
        return (
            <React.Fragment>
                <DashboardLayout>
                    <Row>
                        <Col className={'text-center'}>
                            <h2>Welcome to the Dashboard Page</h2>
                            <p></p>
                        </Col>

                    </Row>

                </DashboardLayout>
            </React.Fragment>
        );
    }
}

export default  Dashboard;