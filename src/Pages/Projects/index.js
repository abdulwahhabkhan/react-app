import React, {Component} from 'react';
import {Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import SortFilter from "../../Components/UI/Filters/Sort";
import DashboardLayout from "../../Layouts/Dashboard";
import project from "../../services/projects";
import ListProject from "./ListProject";
import storage from "../../Config/storage";

class Projects extends Component {

    state = {
        sortOrder: storage.get('project_order_by') || 'asc',
        sort: storage.get('project_sort_by')||'id',
        projects : {data:[]}
    };

    sortOptions = [
        {value: 'id', text:'Default'},
        {value: 'created_at', text:'Created Date'},
        {value: 'updated_at', text:'Last Modified'},
        {value: 'title', text:'Project Name'},
        {value: 'due_date', text:'Due Date'}
    ];

    getProjects(){
        project.getProjects({
            sort: this.state.sort,
            order: this.state.sortOrder
        }).then(response => {
            this.setState({projects : response});
        });
    }

    componentDidMount() {
        window.settings.setTitle('Current Projects');
        project.init();
        this.getProjects();
    }

    sortHandler = (option) =>{
        storage.set('project_sort_by', option.value)
        this.setState({sort : option.value })
        this.getProjects();
    }

    sortOrderHandler= (sorder) =>{
        let norder = sorder === 'asc' ? 'desc' : 'asc';
        storage.set('project_order_by', norder)
        this.setState({sortOrder: norder})
        this.getProjects()
    }

    render() {
        let projects = (
            this.state.projects.data.map((project, index) => {
                return <ListProject
                        projectInfo={project}
                        key={project.id} />
            })
        );


        return (
            <React.Fragment>
                <DashboardLayout sidebar={'show'}>
                    <Row>
                        <Col className={''} sm={12}>
                            <div className="list-options">
                                <div className={'title'}>Current Projects</div>
                                <div className="btn-options text-right">
                                    <button className="btn btn-md btn-primary w-10">
                                        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> Add Project
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="nav-htabs">
                                <ul className="nav nav-tabs">
                                    <li className={'nav-item'}>
                                        <div className="nav-link active">Current</div>
                                    </li>
                                    <li className={'nav-item'}>
                                        <div className="nav-link">Completed</div>
                                    </li>
                                </ul>

                            </div>
                            <div className="tab-content">
                                <Row>
                                    <Col sm={12}></Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <div className="list-options">
                                            <div>{ this.state.projects.total ? this.state.projects.total: '...' } results</div>
                                            <div className="btn-options text-right">
                                                <SortFilter
                                                    options={this.sortOptions}
                                                    sortOrder={this.state.sortOrder}
                                                    sort={this.state.sort}
                                                    sortHandler={this.sortHandler}
                                                    orderHandler={this.sortOrderHandler} ></SortFilter>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={'list'}>
                                    {projects}
                                </Row>
                            </div>
                        </Col>

                    </Row>

                </DashboardLayout>
            </React.Fragment>
        );
    }
}

export default  Projects;