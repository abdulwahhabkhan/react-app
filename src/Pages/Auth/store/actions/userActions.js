import auth from '../../../../services/auth'

export const GET_USER= 'GET_USER'
export const SET_USER= 'SET_USER'

export function getUser(){
    return ()=>{
        return auth.checkUserLogin()
                .then(user=> setUser(user) )
    }
}

export function setUser(user) {
    return (dispatch)=>{
        return dispatch({type: SET_USER,  payload: user})
    }
}

export default getUser