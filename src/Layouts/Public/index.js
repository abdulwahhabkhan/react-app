import React, {Component, Fragment} from "react"
import { Route, Switch } from "react-router-dom"
import {publicRoutes} from "../../routes"

class PublicLayout extends Component {

    render() {
        return(
            <Fragment>
                <Switch>
                    {publicRoutes.map((route, idx) =>
                        <Route path={route.path} component={route.component} key={idx} exact={!route.children}/>
                    )}
                </Switch>
            </Fragment>
        )
    }
}

export default PublicLayout
