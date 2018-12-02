import {
    GET_FAMILIES,
    ADD_FAMILY,
    DELETE_FAMILY
       } from './types';

export const getFamilies = ()=>{
    return {
        type: GET_FAMILIES
    };
};

export const addFamily = (data)=>{
    return {
        type: ADD_FAMILY,
        payload:data
    };
};


