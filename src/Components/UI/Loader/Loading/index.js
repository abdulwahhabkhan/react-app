import React from "react"
import Spinner from "react-bootstrap/Spinner"
import './loading.scss'

const loading = (props) =>{

    if(props.show)
        return(
            <div className="loading-wrapper">
                <div className={'spinner-container'}>
                    <Spinner animation="border" role="status" size={'md'}>
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>

        )
    else
        return null
}

export default loading