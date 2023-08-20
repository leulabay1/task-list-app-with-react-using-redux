import AddTodo from "../components/addTodo";

export const AddTodoAction = (todo) => (dispatch, getState) =>{
    const {
        todos
    } = getState();


    dispatch({
        type: "ADD_TODO",
        payload:[{id: todo, todo, complete: false}, ...todos]
    })

}
export const EditTodoAction = (todo) => (dispatch, getState) =>{
    const {
        todos
    } = getState();
    todos.forEach((t)=>{
        if(t.id === todo.id){
            t.todo = todo.todo
        }
    })
    dispatch({
        type: "EDIT_TODO",
        payload: todos
    })
}
export const CompleteTodo = (todo) =>(dispatch, getState) =>{
    const {
        todos
    } = getState();

    todos.forEach((t)=>{
        if (t.id === todo.id) {
            t.todo = todo.todo
            t.complete = true
        }
    })

    dispatch({
        type: "COMPLETE_TODO",
        payload: todos
    })
}

export const RemoveTodoAction = (todo) => (dispatch, getState) =>{
    const {
        todos
    } = getState();
    dispatch({
        type: "REMOVE_TODO",
        payload: todos.filter((t)=> t.id !== todo.id)
    })
}

