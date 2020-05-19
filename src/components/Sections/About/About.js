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
                        <p className="address">
                            <span>{this.props.name}</span><br/>
                            <span>{this.props.city}<br/>
                                {this.props.street}
                            </span><br/>
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