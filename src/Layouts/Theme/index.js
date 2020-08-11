import React from "react"
import {Redirect, useLocation, withRouter} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import {matchRoutes, renderRoutes} from 'react-router-config'
import routes from "../../routes"
import Header from "./Header";
import ReactNotification from 'react-notifications-component'
import Sidebar from "../../Components/UI/Sidebar/Sidebar";
import {SETTINGS} from "../../store/actions";
import Exception from "../../Components/UI/ExceptionModal";
import storage from "../../Config/storage";


function Theme(props){
    const location = useLocation()
    const dispatch = useDispatch()

    const settings = useSelector(({app})=>app.settings )
    React.useEffect(()=>{
        const matches = matchRoutes(routes, location.pathname);
        const matched =  matches.filter(route => route.route.exact)[0] || matches[0]

        if ( matched && matched.route.sidebar ){
            document.settings.setTitle(matched.route.meta.title);
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
        let sidebarMinified = !settings.pageSidebarMinify;
        storage.set('sidebar_minified', sidebarMinified);
        dispatch({type: SETTINGS.SIDEBARMINIFIED, value: sidebarMinified})
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
        settings.pageSidebarMinify ? 'mini-sidebar': '',
    ]

    return(
        <div className={classes.join(' ')}>
            {logout}
            {settings.pageHeader && (
                <Header logout={logoutHandler} user={{'name': 'abdul'}}/>
            )}

            <ReactNotification />
            <Exception />
            <div className={''} id={'page-container'}>
                <div className="content-wrapper">
                    {settings.pageSidebar && (
                        <Sidebar toggleSiderbar={toggleSidebar} toggled={settings.pageSidebarMinify}>
                            <settings.pageSidebar />
                        </Sidebar>
                        )}
                    <div className="content animate-panel">
                        {renderRoutes(routes)}
                        {/*<Switch>
                            {routes.map((route, idx) =>
                                <Route path={route.path} component={route.component} key={idx} exact={route.exact || !route.children}/>
                            )}
                        </Switch>*/}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default withRouter(React.memo(Theme));
