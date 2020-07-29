import { ADD_USER, EDIT_USER } from "./actionTypes"

export const addUser = (user) =>{
    return({
        type:ADD_USER,  
        payload:user
    })
}

export const editUser = (user) =>{
    return({
        type:EDIT_USER,
        payload:user
    })
}
