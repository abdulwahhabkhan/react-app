import * as PActions from './index'
import projects from '../../../../services/projects'
export function getProjects(params){
    return (dispatch)=>{
        dispatch({type:PActions.LOADING_PROJECTS})
        projects.getProjects().then(res => {
            return dispatch({type: PActions.GET_PROJECTS,  payload: res})
        })
    }
}

export function addProject(data) {

}

export function editProject(data) {

}

export function deleteProject(id) {

}

export function applyfilters(filters) {
    return {type: PActions.PROJECT_FILTERS, payload: filters}
}