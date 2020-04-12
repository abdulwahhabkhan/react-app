import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props)=>{
    let icon =  1 > 2 ? faAngleDoubleLeft : faAngleDoubleRight;
    return(
        <div id={'sidebar'} className={'sidebar'}>
            <span id={'sidebar-toggle'}>
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </span>
            <div className="sidebar-content">
                {props.children}
            </div>
        </div>
    )
}

export default Sidebar