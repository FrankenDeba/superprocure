import { ADD_USER, EDIT_USER } from "../actions/actionTypes"

const initialState = {
    users:[]
}

const reducer = (state = initialState, action) =>{
    let users = state.users.slice()
    switch(action.type){
        case ADD_USER:
        console.log("after dispatch:",action.payload);
            
            users.push(action.payload)
            console.log("users array: ",users);
            
            return({
                ...state,
                users
            })
        case EDIT_USER:
            return({
                ...state,
                name:action.payload.name,
                adress:action.payload.adress
            })
        default:
            return state

    }
}

export default reducer