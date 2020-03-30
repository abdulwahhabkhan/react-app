import React, {Component} from 'react';

import DashboardLayout from "../../Layouts/Dashboard";

class Dashboard extends Component {

    render() {
        return (
            <React.Fragment>
                <DashboardLayout>
                    <h2>Welcome to the Dashboard Page</h2>
                </DashboardLayout>
            </React.Fragment>
        );
    }
}

export default  Dashboard;