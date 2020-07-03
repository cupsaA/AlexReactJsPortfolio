import React, {Component} from "react";
import classes from './Home.module.css'
import Network from './Network/Network'
import ButtonDown from "../../Button/ButtonDown";

class Home extends Component {
    render() {
        return (
            <section className={classes.HomeSection} id="home">
                <div className={classes.HomeSectionCentered}>
                    <h1>{this.props.name}</h1>
                    <h3>I'm <span>{this.props.occupation}</span> based in {this.props.city}{this.props.description}
                    </h3>
                    <hr/>
                    <ul>
                        <Network/>
                    </ul>
                </div>
                <ButtonDown/>
            </section>

        )
    }
}

export default Home;