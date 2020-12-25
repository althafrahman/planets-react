import React, { Component } from 'react'
import { connect } from 'react-redux'
import FavList from './FavList'

class Favorites extends Component {
    render() {
        const planet_data = this.props.state.planetData
        return (
            <div className="container">
                <h3 className="planets_head">My Favourites</h3>
                <div className="row">
                    <FavList planetData={planet_data} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, null)(Favorites)
