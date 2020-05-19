import React, {Component} from "react";
import classes from './NavigationBar.module.css'
import {Link} from 'react-scroll'

class NavigationBar extends Component{
    render() {
        return(
            <div className={classes.NavigationBar}>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration= {500}>
                    Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration= {500}>
                    About</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration= {500}>
                    Contact</Link>
                <Link activeClass="active" to="resume" spy={true} smooth={true} offset={0} duration= {500}>
                    Resume</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration= {500}>
                    Projects</Link>
            </div>

        )
    }
}

export default NavigationBar;