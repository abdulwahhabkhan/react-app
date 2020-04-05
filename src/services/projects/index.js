import axios from 'axios';
import auth from '../auth/'

class Projects {
    init() {
        auth.setAxiosAuth();
    }

    getProjects = (filters) => {
        return new Promise((resolve, reject)=>{
            axios({
                method: 'get',
                url: 'http://laravel.we:8180/api/v1/projects?completed=0'
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