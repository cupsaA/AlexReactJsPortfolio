import React, {Component} from "react";
import classes from './NavigationBar.module.css'
import {Link} from 'react-scroll'



class NavigationBar extends Component{
    render() {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-50px";
            }
            prevScrollpos = currentScrollPos;
        }
        return(
            <div className={classes.NavigationBar} id="navbar">
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