import React, {Component} from "react";
import classes from './Navbar.module.css'
import {Link} from 'react-scroll'
import {Navbar,Nav} from 'react-bootstrap'

class Navbar extends Component{
    render() {
        return(
            <div className={classes.Navbar}>
                    <Link activeClass="active" to="main" spy={true} smooth={true} offset={0} duration= {500}>
                        Main</Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration= {500}>
                        About</Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration= {500}>
                        Contact</Link>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>

            </div>
        )
    }
}

export default Navbar;