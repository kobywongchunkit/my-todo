// import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"
import TodoGroup from './TodoGroup';
function TodoList(){
    return(
            <>
                <h1>Todo List</h1>
                <TodoGroup></TodoGroup>
                <TodoGenerator></TodoGenerator>
            </>
    )
}

export default TodoList;