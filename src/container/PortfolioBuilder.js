import React, {Component} from "react";
import NavigationBar from '../components/NavigationBar/NavigationBar'
import About from '../components/Sections/About/About'
import Contact from  '../components/Sections/Contact/Contact'
import Home from '../components/Sections/Home/Home'
import Projects from "../components/Sections/Projects/Projects";
import Resume from "../components/Sections/Resume/Resume";
import Axios from "../../src/Axios-data"

class PortfolioBuilder extends Component {

    state = {
        name: null,
        city: null,
        occupation: null,
        description: null
    }

    componentDidMount() {
        Axios.get('/myInfo.json')
            .then(response =>
            {this.setState({
                name: response.data.name,
                city: response.data.city,
                occupation: response.data.occupation,
                description: response.data.description
                })
            })
            .catch(error => {console.log(error)});
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <Home name={this.state.name} city={this.state.city} occupation={this.state.occupation} description={this.state.description}/>
                <About/>
                <Contact/>
                <Projects/>
                <Resume/>
            </div>
        )
    }
}

export default PortfolioBuilder;