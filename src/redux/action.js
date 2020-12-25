import {ADD_TO_FAV} from './types';

export const addToFav = (planet_id) => {
    return{
        type : ADD_TO_FAV,
        id : planet_id
    }
}