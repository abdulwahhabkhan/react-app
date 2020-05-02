import React, {Component} from "react";
import Auth from '../../services/auth';

class Logout extends Component {

    componentDidMount() {

       Auth.logout();
        this.props.history.push('/login');
    }

    render() {
        return (
            <React.Fragment>
                <h1>&nbsp;</h1>
            </React.Fragment>
        );
    }
}

export default Logout;