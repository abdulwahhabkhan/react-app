/**
 * All global scrip
 */

//Add Axios intercepters

import axios from "axios";
import {store as exception} from './Components/UI/ExceptionModal'

axios.interceptors.response.use(response => {
    return response;
}, err => {
    //const dispatch = useDispatch()
    return new Promise((resolve, reject) => {
        /*if ( err && err.response.status === 401 && err.config && !err.config.__isRetryRequest )
        {
            // if you ever get an unauthorized response, logout the user
            this.setSession(null);
        }
        throw err*/
        //dispatch({type: ERRORS.SERVERERROR, value: err})
        const ignoreCodes = [422]
        if(err && err.response && err.response.status > 400 && ignoreCodes.indexOf(err.response.status) === -1){
            const response = err.response
            exception.addException({
                status: response.status,
                message: response.statusText,
                info: JSON.stringify(response.data, null, 2),
            })
        }
        throw err.response !== undefined ? err : {...err, response: {}}

    });
});