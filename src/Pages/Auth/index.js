import React, {Component, Fragment} from "react"
import * as userActions from './store/actions/userActions'
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class Auth extends Component {
    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return(
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUserData: userActions.getUser
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Auth)