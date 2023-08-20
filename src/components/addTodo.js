import {useState, useRef} from "react";
import {useDispatch} from "react-redux";
import {AddTodoAction} from "../actions/todoActions";

const AddTodo = ()=>{
    const dispatch = useDispatch()
    const [appear, setAppear] = useState(false)
    const addTodoInputRef = useRef("")
    const addTodo = ()=>{
        if (addTodoInputRef.current.value){
            const value = addTodoInputRef.current.value
            dispatch(
                AddTodoAction(
                    value
                )
            )
        }
    }
    return <div>
        {appear?<>
        <input ref={addTodoInputRef} type="text" className="newNote" placeholder="Add a new Task"/>
            <button onClick={addTodo} className="addButton" >Add</button></>:
            <button onClick={()=>setAppear(!appear)} className="addButton">Add a Task</button>}
    </div>
}
export default AddTodo