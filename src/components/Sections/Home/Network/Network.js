import React from "react";
import classes from './Network.module.css'

const network = () => {
    return(
        <ul className={classes.Network}>
            <li>
                <a href="https://github.com/cupsaA?tab=projects" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/cupsa-alex-956565158/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a href="https://www.skype.com/ro/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-skype"></i>
                </a>
            </li>
        </ul>
    )
}

export default network;