import React, {Component} from 'react'
import {Row, Col} from "react-bootstrap"
import {connect} from 'react-redux'

import {SETTINGS} from '../../store/actions'

class Dashboard extends Component {

    componentDidMount() {
        document.settings.setTitle('Dashboard')
        this.props.hideSideBar()
    }

    componentWillUnmount() {
        this.props.showSideBar()
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col className={'text-center'}>
                        <h2>Welcome to the Dashboard Page</h2>
                        <p></p>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideSideBar: ()=> { dispatch({type: SETTINGS.NOSIDEBAR, value: 1}) },
        showSideBar: ()=> { dispatch({type: SETTINGS.NOSIDEBAR, value: 0}) }
    }
}

export default  connect(null, mapDispatchToProps)(Dashboard);