import React, {Component} from "react";
import classes from './ButtonDown.module.css'

class ButtonDown extends Component {
    render() {
        return (
            <p className={classes.ButtonDown}>
                <i className="fa fa-chevron-circle-down fa-3x"></i>
            </p>
        )
    }
}

export default ButtonDown;