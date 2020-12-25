import React, { Component } from 'react'
import axios from 'axios';
import './styles.css';
import PlanetList from './PlanetList';
import { connect } from 'react-redux';
import { actionLoad } from '../redux/loadAction'
class HomePage extends Component {

    constructor(props) {
        super(props)

    }


    componentWillMount() {

        if (!this.props.state.isSave) {

            axios.get('https://assignment-machstatz.herokuapp.com/planet').then(
                response => {
                    this.props.actionLoad(response.data)
                }
            );
        }


    }
    render() {
        if (this.props.state.isSave) {
            return (
                <div className="container">
                    <h3 className="planets_head">Planets List</h3>
                    <div className="row">
                        {console.log(this.props)}
                        <PlanetList planetData={this.props.state.planetData} />
                    </div>
                </div>
            )
        }
        else {
            return(<div></div>)
        }
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actionLoad: (planetData) => dispatch(actionLoad(planetData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
