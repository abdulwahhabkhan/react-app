import React, {Component} from "react";
import ProgressStyle from './Progressbar.scss'

class Progressbar extends Component{
    render() {
        return(
            <div class="ins-progress"></div>
        )
    }
}

export default Progressbar
export {ProgressStyle, Progressbar}