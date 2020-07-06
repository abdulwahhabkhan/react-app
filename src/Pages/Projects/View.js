import React, {Component} from "react";
import {renderRoutes} from "react-router-config";
import ProjectTabs from "../../Components/UI/Tabs/ProjectTabs";
import Projects from "../../services/projects"

class View extends Component {
    state = {
        filters : {
            'keyword': 'project 1',
            'owner': {},
            'created_date': {},
            'due_date': {}
        },
        project: {}
    }
    baseRoute = this.props.match.url
    params = this.props.match.params
    componentDidMount() {
        console.log(this.props.match)
        Projects.init()
        this.getProject(this.params.id)
    }

    getProject = (id)=>{
        Projects.getProject(id).then(data => {
            this.setState({'project': data} )
        })
    }
    searchProject = (e)=>{
        e.preventDefault()
        console.log(e)
    }

    resetSearch = (e)=>{
        e.preventDefault()
        console.log(e)
    }

    render() {
        return(
            <React.Fragment>
                <ProjectTabs project={this.state.project} />
                {renderRoutes(this.props.route.routes)}
            </React.Fragment>
        )
    }
}

export default View