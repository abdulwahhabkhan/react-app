import React from "react"
import {Link, useHistory, Redirect} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import { useForm } from "react-hook-form"
import Button from "../../Components/Form/ButtonLoader"
import logo from '../../logo.svg'
import * as authActions from '../Auth/store/actions'

function  Login() {
    const { handleSubmit, register, errors } = useForm()
    const dispatch = useDispatch()
    const history = useHistory()
    const login = useSelector(({auth})=> auth.login )
    const user = useSelector(({auth})=> auth.user.data )
    const onSubmit = values => {
        dispatch(authActions.login(values))
            .then((res)=>{
                if(res.type == authActions.LOGIN_SUCCESS)
                    history.push('/dashboard')
            })
    };
    const redirect = user ? '' : <Redirect to={'/dashboard'} />
    return (
        <React.Fragment>
            <div className="auth-content">
                {redirect}
                    <div className="greetings">
                        <img src={logo} alt="React Logo" className="w-128"/>
                        <h3>Welcome to ReactJS</h3>
                        <p>Connecting the ReactJS application with Restful APIs</p>
                    </div>
                    <div className="form" onSubmit={handleSubmit(onSubmit)}>

                        <div className="p-30 pt-128">
                            <h6 className="mb-36">LOGIN TO YOUR ACCOUNT</h6>
                            <form action="" className="">
                                <div className={'form-group '+(errors.username? 'has-error':'')}>
                                    <label htmlFor="username" className="">Username</label>
                                    <input type="text" name="username" id="username"  className="form-control" ref={register({required: true})} />
                                </div>
                                <div className={'form-group ' + (errors.password? 'has-error':'')}>
                                    <label htmlFor="password" className="">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" ref={register({required: true, minLength:3})}/>
                                </div>
                                <div className="form-group">
                                    <Button className={'btn btn-form btn-block'} type={'submit'} loading={login.loading}>Login</Button>
                                </div>
                                {login.error &&
                                <div className={'alert alert-danger'}>{login.error}</div>
                                }
                            </form>
                            <div className="flex flex-column items-center justify-center pt-32">
                                <span className="font-medium">Don't have an account?</span>
                                <Link to="/register" className="font-medium">Create an Account</Link>
                                <Link to="/" className="font-medium">Back to Dashboard</Link>
                            </div>
                        </div>

                    </div>

                </div>
        </React.Fragment>
    )
}


export default Login;