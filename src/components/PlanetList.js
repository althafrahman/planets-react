import React, { Component } from 'react'
import { addToFav } from '../redux/action'
import { connect } from 'react-redux'
import Hearts from './Hearts';
import FavText from './FavText';

class PlanetList extends Component {
    render() {
        const planet_data = this.props.planetData;
        return (
            <React.Fragment>
                {planet_data.map(planets => (
                    <div key={planets.id} className="col-md-4">
                        <div className="card">

                            <div className="card-body">
                                <h4><b>{planets.name}</b></h4>
                            </div>
                            <div className="card-footer">
                                <Hearts isFav={planets.isFavourite} />
                                <button onClick={() => { this.props.addToFav(planets.id) }} className="btn btn-info"><FavText isFav={planets.isFavourite} /></button>
                            </div>
                        </div>
                    </div>
                ))}

            </React.Fragment>
        )
    }


}

const mapDispatchToProps = dispatch => {
    return {
        addToFav: (planetId) => dispatch(addToFav(planetId))
    }
}


export default connect(null, mapDispatchToProps)(PlanetList)
