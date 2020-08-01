import { ADD_USER, EDIT_USER, SELECT_USER } from "../actions/actionTypes"

const initialState = {
    users:[],
    selectedUser:null
}

const reducer = (state = initialState, action) =>{
    let users = state.users.slice()
    let selectedUser = state.selectedUser
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
            let user = users.find(item =>item.number===action.payload.number)
            let index = users.indexOf(user)
            users.splice(index,1,action.payload)
            return({
                ...state,
               users
            })
        case SELECT_USER:
            return({
                ...state,
                selectedUser:action.payload
            })
        default:
            return state

    }
}

export default reducer