import axios from 'axios';
import auth from '../auth/'

class Projects {

    init() {
        auth.setAxiosAuth();
    }

    getProjects = ({completed= 0, sort= 'id', order = 'asc', ...rest}) => {
        let params = 'completed='+completed+'&sortby='+sort+'&orderby='+order;
        return new Promise((resolve, reject)=>{
            axios({
                method: 'get',
                url: 'projects?'+params
            }).then(response => {
                if(response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data);
                }
            }).catch(res =>{
                reject(res.response.data);
            });
        })
    }

    saveProject = (data)=>{
        const method = data.id ? 'PUT' : 'POST';
        const url = data.id ? 'project/'+data.id : 'project'
        return new Promise((resolve, reject)=>{
            axios({
                method: method,
                url: url,
                data: data
            }).then(response =>{
                resolve(response.data);
            }).catch(res =>{
                reject(res.response);
            })
        })
    }
}

const instance = new Projects();
export default instance;