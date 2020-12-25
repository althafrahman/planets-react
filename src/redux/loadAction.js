import {LOAD} from './types'

export const actionLoad = (data) => {
    return{
        type : LOAD,
        payload : data
    }
}