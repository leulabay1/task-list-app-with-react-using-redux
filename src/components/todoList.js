import {useSelector} from "react-redux";
import Todo from "./Todo";
import {useState} from "react"

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const [showCompleted, setShowCompleted] = useState(true);
    const [showAll, setShowAll] = useState(true)

    // Generate the filtered todos based on the showCompleted state
    const filteredTodos = todos.filter(todo => showAll? true: showCompleted ? todo.complete : !todo.complete);

    const handleComplete = () => {
        setShowAll(false)
        setShowCompleted(true);
    };

    const handleNotComplete = () => {
        setShowAll(false)
        setShowCompleted(false);
    };

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <>
            <div className="todoList-container">
            <div className="button-container">
                <span className="complete-button" onClick={handleComplete}>Completed List</span>
                <span className="delete-button" onClick={handleNotComplete}>Not Completed</span>
                <span className="edit-button" onClick={handleShowAll}>Show All</span>
            </div>

            <ul>
                {filteredTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
                </div>
        </>
    );
}



export default TodoList