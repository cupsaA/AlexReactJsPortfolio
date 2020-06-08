import React, { Component } from "react";
import classes from './Contact.module.css'

class Contact extends Component {
    render() {
        return (
            <div className={classes.Contact} id="contact">
                <div><i class="fa fa-envelope" aria-hidden="true"></i>
                    <p>Have a od fit for your team? I'd love to hear from you, give me a shout by email or by using the form below if you'd like to get in contact with me.</p>
                </div>
            </div>
        )
    }
}
export default Contact;