import {
    GET_FAMILIES,
    ADD_FAMILY,
    DELETE_FAMILY,
    FAMILIES_LOADING
       } from '../actions/types'
const initialState = {
    loading :false,
    families:[]
};



export default (state = initialState,action) => {
    switch(action.type){
        case GET_FAMILIES:
            return {
                ...state,
                loading:false,
                families:action.payload
            }
        case ADD_FAMILY:
            return{
                ...state,
                families:[action.payload,...state.families]  
            }
        case FAMILIES_LOADING:
            return{
                ...state,
                loading:true
            }    
               
        default:
            return state;    
    }
  
}




