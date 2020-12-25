import React, { Component } from 'react'

class FavText extends Component {
    render() {
        if (!this.props.isFav) {
            return (
                <>
                    Make Favorite
                </>
            )
        } else {
            return (
                <>
                    Remove Favorite
                </>
            )
        }


    }
}

export default FavText
