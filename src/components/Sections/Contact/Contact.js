import React, {Component} from "react";
import classes from './Contact.module.css'
import {Button, Form} from "react-bootstrap";

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null,
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true,
            emailSent: true
        });
    };

    render() {
        return (
            <div className={classes.Contact} id="contact" onSubmit={this.handleSubmit}>
                <div><i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
                    <p>Have a od fit for your team? I'd love to hear from you, give me a shout by email or by using the
                        form below if you'd like to get in contact with me.</p>
                </div>
                <div>
                    <Form className={classes.ContactForm}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name}
                                          onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email}
                                          onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="4" value={this.state.message}
                                          onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit"
                                disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p style={{color: "#57A773"}} className={classes.ContactForm}>Email Sent</p>}
                        {this.state.emailSent === false && <p style={{color: "#EE6352"}}className={classes.ContactForm}>Email Not Sent</p>}
                    </Form>
                </div>
            </div>
        )
    }
}

export default Contact;