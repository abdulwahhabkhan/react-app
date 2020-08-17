import axios from 'axios';
import auth from '../auth/'

class Tickets {
    init() {
        auth.setAxiosAuth();
    }

    getTickets = (filters) => {
        const params = {completed:0, sort: 'id', order: 'asc', ...filters};
        console.log(params)
        const qry_str = Object.keys(params).map(key => key.toLowerCase() + "="+encodeURI(params[key])).join('&');
        return new Promise((resolve, reject)=>{
            axios({
                method: 'get',
                url: 'project/tickets/'+params.project_id+'?'+qry_str
            }).then(response => {
                if(response.data) {
                    resolve(response.data);
                } else {
                    reject(response.data);
                }
            }).catch(res =>{
                reject(res);
            });
        })
    }
}

const instance = new Tickets();
export default instance;