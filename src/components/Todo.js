import React from "react";
import {RemoveTodoAction, EditTodoAction, CompleteTodo,} from "../actions/todoActions"
import {useDispatch} from "react-redux";
import {useState, useRef} from "react";
function Todo({todo}){
    const inputRef = useRef(todo.todo)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const handleDelete = ()=>{
        dispatch(RemoveTodoAction(todo))
    }
    const [toggle, setToggle] = useState(false)
    const handleEdit = () =>{
        if (edit) {
            dispatch(EditTodoAction({id: todo.id, todo: inputRef.current.value}))
            setEdit(false)
        }else{
            setEdit(true)
        }
    }
    const handleComplete = () =>{
        console.log(3452345)
        dispatch(CompleteTodo(todo))
        setToggle(true)
    }
    return <>
        {
            edit? <li>
                    <input ref={inputRef} placeholder={todo.todo} type="text"/>
                    <span className="edit-button" onClick={handleEdit}>Save</span>
                    <span className="delete-button" onClick={()=>{
                        setEdit(false)
                    }}>Cancel</span>
                </li>
                :<li><span className={todo.complete?"complete":"not-completed"}>{todo.todo}</span>
                    <div className="button-container">
                        <span className="complete-button" onClick={handleComplete}>complete</span>
                        <span className="edit-button" onClick={handleEdit}>Edit</span>
                        <span onClick={handleDelete} className="delete-button">Delete</span>
                    </div>
                </li>}
        </>
}
export default Todo;