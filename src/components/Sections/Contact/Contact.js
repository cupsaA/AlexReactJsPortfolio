import React, {Component} from "react";
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contactPage" id='ceva'>
                <div>
                    <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
                    <p>Have a project for me? Think I'd be a good fit for your team? I'd love to hear from
                        you, give me a shout by email or by using the form below if you'd like to get in contact with me.</p>
                </div>
                <h4 style={{color:'red'}}>
                    Warning: Contact form not yet configured, please contact me via normal email for now
                </h4>
                <div className="container">
                    <form id="contact" action method="post">
                        <h3>Contact Form</h3>
                        <fieldset>
                            <input placeholder="Your name" type="text" tabIndex={1} required autoFocus/>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Email Address" type="email" tabIndex={2} required/>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Phone Number (optional)" type="tel" tabIndex={3} required/>
                        </fieldset>
                        <fieldset>
                            <textarea placeholder="Type your message here...." tabIndex={5} required defaultValue={""}/>
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit
                            </button>
                        </fieldset>
                    </form>
                </div>
                <div className="contactInfo">
                    <h3>Address and Phone</h3>
                    <ul>
                        <li>Cupsa Alex</li>
                        <li>0749234414</li>
                        <li>cupsa.alex93@gmail.com</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Contact;