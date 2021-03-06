import React, {Component} from "react";
import classes from './About.module.css'
import ProfilePic from "../../../assets/profile-pic.jpg";
import AboutMe from "./AboutMe/AboutMe";

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
                        <div><AboutMe description={this.props.aboutMeDescription}/></div>
                        <h2>Contact Details</h2>
                        <p>
                            <span>{this.props.name}</span><br/>
                            <span>{this.props.city}<br/>
                            </span>
                            <span>{this.props.phoneNumber}</span><br/>
                            <span>{this.props.email}</span>
                        </p>
                    </div>
                </div>

            </section>
        )
    }
}

export default About;