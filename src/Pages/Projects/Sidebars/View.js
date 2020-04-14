import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faRetweet} from "@fortawesome/free-solid-svg-icons";

const ProjectSidebar = ()=>{
    return(
        <div className={'project-filter-list'}>
            <form action="">
                <div className="filter-block">
                    <div className="filter-header">Keyword</div>
                    <div className="filter-body">
                        <input type="text" className={'form-control form-control-sm'}/>
                    </div>
                </div>
                <div className="filter-block">
                    <div className="filter-header">Keyword</div>
                    <div className="filter-body">
                        <input type="text" className={'form-control form-control-sm'}/>
                    </div>
                </div>
                <div className="filter-block">
                    <div className="filter-header">Keyword</div>
                    <div className="filter-body">
                        <input type="text" className={'form-control form-control-sm'}/>
                    </div>
                </div>
                <div className="filter-block">
                    <div className="filter-header">Keyword</div>
                    <div className="filter-body">
                        <input type="text" className={'form-control form-control-sm'}/>
                    </div>
                </div>
                <div className="filter-block">
                    <div className="filter-body">
                        <button type="submit" className="btn btn-primary pull-right btn-sm">
                            <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon> Apply Filter
                        </button>
                        <button className="btn btn-default btn-sm">
                            <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon> Reset Filter
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProjectSidebar