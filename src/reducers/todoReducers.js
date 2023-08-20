export const TodoReducers = (state = {todos: []}, action) =>{
    switch (action.type) {
        case "ADD_TODO":
            return  action.payload;
        case "REMOVE_TODO":
            return action.payload;
        case "EDIT_TODO":
            return action.payload;
        case "COMPLETE_TODO":
            console.log(action.payload)
            return action.payload;
        default:
            return state
    }
}