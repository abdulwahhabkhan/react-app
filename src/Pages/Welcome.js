import React, {Component} from "react";
import background from '../images/bg/home-bg.jpg';
import GuestHeader from "../Layouts/Theme/headers/Guest";

class  Welcome extends Component {
    render() {
        return (
            <div>
                <GuestHeader />
                <div className="content has-bg home">
                    <div className="content-bg">
                        <img src={background} alt="home background"/>
                    </div>
                    <div className="container home-content">
                        <h1>Welcome to ReactJS Application</h1>
                        <h3>Connecting the ReactJS application with Restful APIs</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;