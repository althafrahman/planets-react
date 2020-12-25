import React, { Component } from 'react'

export class FavListEach extends Component {
    render() {
        const prd_det = this.props.prd_det;
        if (prd_det.isFavourite) {
            return (
                <div className="col-md-6">
                    <div className="card">

                        <div className="card-body">
                            {prd_det.name}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <React.Fragment>
                  
                </React.Fragment>
            )
        }

    }
}

export default FavListEach
