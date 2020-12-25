import React, { Component } from 'react'

class Hearts extends Component {
    render() {
        if (this.props.isFav) {
            return (
                <React.Fragment>
                    <i className="fav fa fa-heart"></i>
                </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                    <i className="favs fav fa fa-heart"></i>
                </React.Fragment>
            )
        }

    }
}

export default Hearts
