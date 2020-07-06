import React from 'react'

const BlankSlate = (props) => {
    return (
        <div className="blank-slate">
            <div className="slate-body">
                <div className="slate-image">
                    <img src={props.image} alt={'blank-slate'} />
                </div>
                <div className="slate-text">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default BlankSlate