import React, {Component} from "react";
import classes from './Main.module.css'

class Main extends Component{
    render() {
        return(
            <div className={classes.MainSection} id="main">
                <p>From the main</p>
            </div>
        )
    }
}
export default Main;