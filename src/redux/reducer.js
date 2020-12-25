import { ADD_TO_FAV, LOAD } from './types'
import axios from 'axios';
const initialState = {
    planetData: [],
    isSave: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAV:
            var indexs = state.planetData.findIndex(data => (data.id == action.id))
            var back = Object.assign([], state.planetData);
            back[indexs].isFavourite = !back[indexs].isFavourite
            return {
                ...state,
                planetData: back
            }
        case LOAD:

            return {
                planetData: action.payload,
                isSave: true
            }
        default:
            return state
    }
}

export default reducer