import React, {Component} from "react";
import classes from './About.module.css'
import ProfilePic from "../../../assets/profile-pic.jpg";

class About extends Component {
    render() {
        return (
            <section className={classes.AboutSection} id="about">
                <div>
                    <div className={classes.AboutSectionColumnLeft}>
                        <img src={ProfilePic} alt="Alex Cupsa Profile Pic"/>
                    </div>
                    <div className={classes.AboutSectionColumnRight}>
                        <h2>About Me</h2>
                        <p>Some info describing me</p>
                        <h2>Contact Details</h2>

                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                </div>

            </section>
        )
    }
}

export default About;