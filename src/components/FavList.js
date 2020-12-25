import React, { Component } from 'react'
import FavListEach from './FavListEach';

export class FavList extends Component {
    render() {
        const planet_data = this.props.planetData;
        return (
            <React.Fragment>
                {planet_data.map(planets => (
                    <FavListEach key={planets.id} prd_det={planets} />
                ))}

            </React.Fragment>
        )
    }
}

export default FavList
