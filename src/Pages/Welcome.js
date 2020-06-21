import React, {Component} from "react";

import background from '../images/bg/home-bg.jpg';
import AuthLayout from "../Layouts/Auth";


class  Welcome extends Component {
    render() {
        return (
            <div>
                <AuthLayout type="welcome">
                    <div className="content-bg">
                        <img src={background} alt="home background"/>
                    </div>
                    <div className="container home-content">
                        <h1>Welcome to ReactJS Application</h1>
                        <h3>Connecting the ReactJS application with Restful APIs</h3>
                    </div>
                </AuthLayout>
            </div>
        );
    }
}

export default Welcome;