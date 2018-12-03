import {
    GET_FAMILIES,
    ADD_FAMILY,
    DELETE_FAMILY,
    FAMILIES_LOADING
       } from './types';
import axios from 'axios';

export const getFamilies = ()=> dispatch=>{
    dispatch(setFamilyLoading());
    axios
        .get('/api/families')
        .then(res=>
            dispatch({
                type:GET_FAMILIES,
                payload:res.data
            })
            )
};

export const addFamily = family=> dispatch=>{
    axios.post('/api/families',family).then(res=>
            dispatch({
                type:ADD_FAMILY,
                payload:res.data  
            })
            )
};

export const setFamilyLoading = ()=>{
    return {
        type: FAMILIES_LOADING,
    };
};


