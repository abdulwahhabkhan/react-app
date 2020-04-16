import React, {Component, Suspense, lazy} from 'react';
import {Row, Col} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import SortFilter from "../../Components/UI/Filters/Sort";
import DashboardLayout from "../../Layouts/Dashboard";
import project from "../../services/projects";
import ListProject from "./ListProject";
import storage from "../../Config/storage";
import ProjectSidebar from "./Sidebars/ProjectSidebar";
import Loading from "../../Components/UI/Loader/Loading";
import View from "./View";
const ProjectForm= lazy(() => import('./Form'));

class Projects extends Component {

    state = {
        loading: true,
        sortOrder: storage.get('project_order_by') || 'asc',
        sort: storage.get('project_sort_by')||'id',
        projects : {data:[]},
        showProjectForm : false
    };

    sortOptions = [
        {value: 'id', text:'Default'},
        {value: 'created_at', text:'Created Date'},
        {value: 'updated_at', text:'Last Modified'},
        {value: 'name', text:'Project Name'},
        {value: 'due_date', text:'Due Date'}
    ];

    getProjects(){
        this.setState({loading: true})
        project.getProjects({
            completed: 0,
            sort: this.state.sort,
            order: this.state.sortOrder
        }).then(response => {
            this.setState({loading: false})
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
        this.setState({sort : option.value }, () => this.getProjects())

    }

    sortOrderHandler= (sorder) =>{
        let norder = sorder === 'asc' ? 'desc' : 'asc';
        storage.set('project_order_by', norder)
        this.setState({sortOrder: norder}, () => this.getProjects())

    }

    projectFormHandler = (flag)=>{
        this.setState({showProjectForm : flag})
    }



    render() {
        let projects = (
            this.state.projects.data.map((project, index) => {
                return <ListProject
                        projectInfo={project}
                        key={project.id} />
            })
        );
        let sidebar = <ProjectSidebar></ProjectSidebar>
        let projectForm = this.state.showProjectForm ? <ProjectForm show={true} onclose={this.projectFormHandler} project={{}}></ProjectForm> : null
        return (
            <React.Fragment>
                <DashboardLayout sidebar={sidebar}>
                    <Row>
                        <Col className={''} sm={12}>
                            <div className="list-options">
                                <div className={'title'}>Current Projects</div>
                                <div className="btn-options text-right">
                                    <button className="btn btn-md btn-primary w-10" onClick={()=> this.projectFormHandler(true)}>
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
                                    <Loading show={this.state.loading}>Projects Loading</Loading>
                                    {projects}
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <Suspense fallback={<div>Loading...</div>}>
                    {projectForm}
                    </Suspense>
                </DashboardLayout>
            </React.Fragment>
        );
    }
}

export default  Projects;
export {Projects, View}