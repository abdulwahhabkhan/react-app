import React from "react"
import {Redirect, Route, Switch, useLocation, withRouter} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import {matchRoutes} from 'react-router-config'
import routes from "../../routes"
import Header from "./Header";
import ReactNotification from 'react-notifications-component'
import Sidebar from "../../Components/UI/Sidebar/Sidebar";
import {SETTINGS} from "../../store/actions";



function Theme(props){
    const location = useLocation()
    const dispatch = useDispatch()

    const settings = useSelector(({app})=>app.settings )
    React.useEffect(()=>{
        const matched = matchRoutes(routes, location.pathname)[0];
        if ( matched && matched.route.sidebar ){
            dispatch({type: SETTINGS.SIDEBAR, value: matched.route.sidebar})
        } else {
            dispatch({type: SETTINGS.SIDEBAR, value: ''})
        }

        if ( matched && matched.route.noHeader ){
            dispatch({type: SETTINGS.HEADER, value: false})
        } else {
            dispatch({type: SETTINGS.HEADER, value: true})
        }

    }, [location, dispatch])

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
        settings.pageSidebar ? '': 'no-sidebar',
        settings.pageHeader ? '': 'no-header',
    ]

    return(
        <div className={classes.join(' ')}>
            {logout}
            {settings.pageHeader && (
                <Header logout={logoutHandler} user={{'name': 'abdul'}}/>
            )}

            <ReactNotification />
            <div className={''} id={'page-container'}>
                <div className="content-wrapper">
                    {settings.pageSidebar && (
                        <Sidebar toggleSiderbar={toggleSidebar} toggled={false}>
                            <settings.pageSidebar />
                        </Sidebar>
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

export default withRouter(React.memo(Theme));
