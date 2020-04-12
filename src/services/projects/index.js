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
                url: 'http://laravel.we:8180/api/v1/projects?'+params
            }).then(response => {
                if(response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data);
                }
            });
        })
    }
}

const instance = new Projects();
export default instance;