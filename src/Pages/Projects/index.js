import React, {Component, Suspense, lazy} from 'react';
import {Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import SortFilter from "../../Components/UI/Filters/Sort";
import project from "../../services/projects";
import ListProject from "./List/Project";
import Loading from "../../Components/UI/Loader/Loading";
import View from "./View";
import {NavLink, Redirect} from 'react-router-dom';
import {store as notify} from 'react-notifications-component';
import {applyOrder, applySort, getProjects} from './store/actions'
import {connect} from "react-redux";

import {renderRoutes} from "react-router-config";
const ProjectForm= lazy(() => import('./Form'));

class ProjectsList extends Component {
    state = {
        showProjectForm : false,
        projectID : 0,
        completed : this.props.route.completed
    };
    //projects = this.props.projects.rows



    sortOptions = [
        {value: 'id', text:'Default'},
        {value: 'created_at', text:'Created Date'},
        {value: 'updated_at', text:'Last Modified'},
        {value: 'name', text:'Project Name'},
        {value: 'due_date', text:'Due Date'}
    ];

    getProjects= (params)=>{

        this.props.loadProjects({
            completed: this.state.completed,
            ...this.props.projects.filters,
            sortBy: this.props.projects.sortBy,
            orderBy: this.props.projects.orderBy,
            page: this.props.projects.pagination.page,
            ...params
        })
    }

    componentDidMount() {
        if(this.props.match.path === '/projects')
            this.props.history.push('/projects/current');

        const title = this.state.completed ? 'Completed' : 'Current'
        document.settings.setTitle(title+' Projects');
        project.init();
        this.getProjects({completed: this.state.completed});
    }

    sortHandler = (option) =>{
        this.props.applySort(option.value)
        this.getProjects({sortBy:option.value })
    }

    sortOrderHandler= (sorder) =>{
        let norder = sorder === 'asc' ? 'desc' : 'asc';
        this.props.applyOrder(norder)
        this.getProjects({orderBy:norder })
    }

    projectFormHandler = (flag)=>{
        this.setState({showProjectForm : flag, project: null})
    }

    projectUpdateHandler= (data) =>{
        this.getProjects({completed: this.state.completed});
        return notify.addNotification({
            ...document.settings.NOTIFY,
            type: 'success',
            title: "Success",
            message: "Project save successfully"
        });
    }

    editProjectHandler = (project)=>{
        this.setState({showProjectForm: true, project: project})
    }
    deleteProjectHandler = (id)=>{
        //ask for confirmation and delete the project

    }
    completeProjectHandler = (id)=>{
        //mark the project as completed
        project.completeProject({id: id})
            .then(response=>{
                this.getProjects(this.state.completed)
                return notify.addNotification({
                    ...document.settings.NOTIFY,
                    type: 'success',
                    title: "Success",
                    message: "Project complete status updated successfully"
                });
            })
            .catch(response=>{
            })
    }

    searchProject = (data)=>{

        console.log(data)
    }

    resetSearch = (data)=>{
       console.log(data)
    }

    render() {
        const {rows, pagination, sortBy, orderBy} = this.props.projects

        let projectsList = (
            rows.map((project, index) => {
                return <ListProject
                        projectInfo={project}
                        onEdit={this.editProjectHandler}
                        onDelete={this.deleteProjectHandler}
                        onComplete={this.completeProjectHandler}
                        key={project.id} />
            })
        );
        let projectForm = this.state.showProjectForm ? <ProjectForm show={true} onClose={this.projectFormHandler} onUpdate={this.projectUpdateHandler} project={this.state.project}></ProjectForm> : null

        return (
            <React.Fragment>
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
                                    <NavLink to={'/projects/current'} className={'nav-link'}>Current</NavLink>
                                </li>
                                <li className={'nav-item'}>
                                    <NavLink to={'/projects/completed'} className={'nav-link'}>Completed</NavLink>
                                </li>
                            </ul>

                        </div>
                        <div className="tab-content">
                            <Row>
                                <Col sm={12}>
                                    <div className="list-options">
                                        <div>{ pagination.totalRecords ? pagination.totalRecords: '...' } results</div>
                                        <div className="btn-options text-right">
                                            <SortFilter
                                                options={this.sortOptions}
                                                sortOrder={orderBy}
                                                sort={sortBy}
                                                sortHandler={this.sortHandler}
                                                orderHandler={this.sortOrderHandler} ></SortFilter>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={'list'}>
                                <Loading show={this.props.projects.loading}>Projects Loading</Loading>
                                {projectsList}
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Suspense fallback={<div>Loading...</div>}>
                {projectForm}
                </Suspense>
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProjects: params => dispatch(getProjects(params)),
        applySort: params => dispatch(applySort(params)),
        applyOrder: params => dispatch(applyOrder(params)),
    };
}
const mapStateToProps = state => {
    return {
        projects :  state.projects.project
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)

const ProjectsWrapper = ({route})=>{

    const redirect = route.path === '/projects' ? <Redirect to={route.path+'/current'} /> : '';
    return (
        <React.Fragment>
            {redirect}
            {renderRoutes(route.routes)}
        </React.Fragment>
    )
}

export {ProjectsWrapper, View}