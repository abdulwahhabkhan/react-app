import React, {Component, Fragment} from "react";
import DashboardLayout from "../../Layouts/Dashboard";
import ProjectSBView from "./Sidebars/View";


class View extends Component {

    render(){
        let sidebar = <ProjectSBView></ProjectSBView>
        return(
            <Fragment>
                <DashboardLayout sidebar={sidebar}>Project View</DashboardLayout>
            </Fragment>

        )
    }
}

export default View