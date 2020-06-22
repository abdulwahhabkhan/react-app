import auth from '../../../../services/auth'

export const GET_USER= 'GET_USER'
export const SET_USER= 'SET_USER'

export function getUser(){
    return (dispatch)=>{
        return auth.checkUserLogin()
                .then(user=> {
                    dispatch({type: SET_USER,  payload: user})
                })
            .catch(err=>{

            })
    }
}

export function setUser(user) {
    return (dispatch)=>{
        console.log("set user Called")
        return dispatch({type: SET_USER,  payload: user})
    }
}


export default getUser