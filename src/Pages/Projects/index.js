import React, {Component, Suspense, lazy} from 'react';
import {Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import SortFilter from "../../Components/UI/Filters/Sort";
import DashboardLayout from "../../Layouts/Dashboard";
import project from "../../services/projects";
import ListProject from "./List/Project";
import storage from "../../Config/storage";
import ProjectSidebar from "./Sidebars/ProjectSidebar";
import Loading from "../../Components/UI/Loader/Loading";
import View from "./View";
import {NavLink} from 'react-router-dom';
import {store as notify} from 'react-notifications-component';
const ProjectForm= lazy(() => import('./Form'));

class Projects extends Component {

    state = {
        loading: true,
        sortOrder: storage.get('project_order_by') || 'asc',
        sort: storage.get('project_sort_by')||'id',
        projects : {data:[]},
        showProjectForm : false,
        projectID : 0,
        project: null,
        completed: this.props.match.path === "/projects/completed" ? 1 : 0
    };


    sortOptions = [
        {value: 'id', text:'Default'},
        {value: 'created_at', text:'Created Date'},
        {value: 'updated_at', text:'Last Modified'},
        {value: 'name', text:'Project Name'},
        {value: 'due_date', text:'Due Date'}
    ];

    getProjects= (completed)=>{
        this.setState({loading: true})
        project.getProjects({
            completed: completed,
            sort: this.state.sort,
            order: this.state.sortOrder
        }).then(response => {
            this.setState({loading: false})
            this.setState({projects : response});
        });
    }

    componentDidMount() {
        if(this.props.match.path === '/projects')
            this.props.history.push('/projects/current');

        const title = this.state.completed ? 'Completed' : 'Current'
        document.settings.setTitle(title+' Projects');
        project.init();
        this.getProjects(this.state.completed);
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        const completed = this.props.match.path === '/projects/completed' ? 1 : 0
        const title = completed ? 'Completed' : 'Current'
        if(this.props.match.path === '/projects')
            this.props.history.push('/projects/current');

        document.settings.setTitle(title+' Projects');
        if(prevProps.match.path !== this.props.match.path)
            this.getProjects(completed );
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
        this.setState({showProjectForm : flag, project: null})
    }

    projectUpdateHandler= (data) =>{
        this.getProjects(this.state.completed);
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

    render() {
        let projects = (
            this.state.projects.data.map((project, index) => {
                return <ListProject
                        projectInfo={project}
                        onEdit={this.editProjectHandler}
                        onDelete={this.deleteProjectHandler}
                        onComplete={this.completeProjectHandler}
                        key={project.id} />
            })
        );
        let sidebar = <ProjectSidebar></ProjectSidebar>
        let projectForm = this.state.showProjectForm ? <ProjectForm show={true} onClose={this.projectFormHandler} onUpdate={this.projectUpdateHandler} project={this.state.project}></ProjectForm> : null

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