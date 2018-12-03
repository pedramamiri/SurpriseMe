import {
    GET_FAMILIES,
    ADD_FAMILY,
    DELETE_FAMILY
       } from '../actions/types'
const initialState = require('../initialState.json');

export default (state = initialState,action) => {
    switch(action.type){
        case GET_FAMILIES:
            return {
                ...state
            }
        case ADD_FAMILY:
            return{
                ...state,
                families:[...action.payload,...state.families]  
            }
               
        default:
            return state;    
    }
  
}




