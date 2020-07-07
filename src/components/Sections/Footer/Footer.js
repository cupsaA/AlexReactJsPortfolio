import React, {Component} from 'react';
import Network from '../Home/Network/Network'
import classes from './Footer.module.css'
import ButtonUp from '../../Button/ButtonUp/ButtonUp'

class Footer extends Component {
    render() {
        return (
            <div className={classes.Footer}>
                <ButtonUp/>
                <Network/>
                <p>&#169;Copyright 2017 <a>Alex Cupsa</a></p>
            </div>
        );
    }
}

export default Footer;