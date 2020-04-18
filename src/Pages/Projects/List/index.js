import React, {Component} from "react"

class ProjectsList extends Component{
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>Projects List Component for Current and Completed</div>
        )
    }
}

export default ProjectsList