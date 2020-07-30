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
            let user = users.find(item =>item.number===action.payload.number)
            let index = users.indexOf(user)
            users.splice(index,1,action.payload)
            return({
                ...state,
               users
            })
        default:
            return state

    }
}

export default reducer