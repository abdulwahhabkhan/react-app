import axios from 'axios';

class  user {
    init(){
        this.interceptor();

    }

    interceptor = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if ( err && err.response.status === 401 && err.config && !err.config.__isRetryRequest )
                {
                    // if you ever get an unauthorized response, logout the user
                    this.setSession(null);
                }
                throw err
            });
        });
    };

    setSession = access_token => {
        if ( access_token )
        {
            localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else
        {
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    logout = () => {

        return new Promise((resolve, reject) => {
            axios({method: 'post',url:'logout'})
                .then(response => {
                    this.setSession(null);
                    localStorage.removeItem('user');
                    resolve(response)
                })
                .catch(res =>{
                    this.setSession(null);
                    localStorage.removeItem('user');
                    resolve(res.response.data);
                })
        })
    };

    getLoggedInUser = () => {
        const user = localStorage.getItem('user');
        if (user)
            return JSON.parse(user);
        return null;
    }

    setLoggedInUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
    }

    //is user is logged in
    isUserAuthenticated = () => {
        return this.getLoggedInUser() !== null;
    }

    setAxiosAuth = ()=>{
        let token = this.getAccessToken();
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }

    getAccessToken = () => {
        return window.localStorage.getItem('jwt_access_token');
    };

    g

    createUser = (data) => {
        return new Promise((resolve, reject) => {
            axios.post('register', data)
                .then(response => {
                    if ( response.data.user )
                    {
                        this.setSession(response.data.access_token);
                        resolve(response.data.user);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };

    signInWithEmailAndPassword = (email, password) => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: 'login',
                data: {
                    email,
                    password
                }
            }).then(response => {
                if ( response.data.user )
                {
                    this.setSession(response.data.access_token);
                    this.setLoggedInUser(response.data.user)
                    resolve(response.data.user);
                }
                else
                {
                    reject(response.data.error);
                }
            })
                .catch(res =>{
                    reject(res.response.data);
                })
        });
    };

    checkUserLogin = () => {
        let token = this.getAccessToken();
        if(!token)
            return Promise.reject({}) ;

        return new Promise((resolve, reject) => {
            axios.get('user', {
                data: {

                }
            })
                .then(response => {
                    resolve(response.data);
                })
                .catch(err =>  reject(err) );
        });

    };

    getUsers =() =>{
        return new Promise( (resolve, reject) =>{
            axios.get('users/list')
                .then(response => {
                    resolve(response.data)
                })
                .catch(err => reject(err))
        })
    }
}

const instance = new user();

export default instance;