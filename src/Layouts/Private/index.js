import React from "react"
import {Redirect, Route, Switch, useLocation, withRouter} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import routes from "../../routes"
import Header from "./Header";
import ReactNotification from 'react-notifications-component'
import Sidebar from "../../Components/UI/Sidebar/Sidebar";


function PrivateLayout(props){
    const location = useLocation()
    const dispatch = useDispatch()

    const settings = useSelector(({app})=>app.settings )
    React.useEffect(()=>{
        console.log('[location chagned]')
    }, [location])

    const logout = 'this.state.user' ? '' : <Redirect  to={'/'}/>

    function toggleSidebar(){
        /*let sidebarMinified = !pageOptions.pageSidebarMinified;
        storage.set('sidebar_minified', sidebarMinified);
        pageOptions.pageSidebarMinified = sidebarMinified;
        this.setState({'sidebarMinified': sidebarMinified})*/
    }

    function logoutHandler() {

    }

    const classes = ['fixed-navbar', 'app-layout',
        settings.pageSidebar ? '': 'no-sidebar'
    ]

    return(
        <div className={classes.join(' ')}>
            {logout}
            <Header logout={logoutHandler} user={{'name': 'abdul'}}/>
            <ReactNotification />
            <div className={''} id={'page-container'}>
                <div className="content-wrapper">
                    {settings.pageSidebar && (
                        <Sidebar toggleSiderbar={toggleSidebar} toggled={false} />
                        )}
                    <div className="content animate-panel">
                        <Switch>
                            {routes.map((route, idx) =>
                                <Route path={route.path} component={route.component} key={idx} exact={!route.children}/>
                            )}
                        </Switch>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default withRouter(React.memo(PrivateLayout));
