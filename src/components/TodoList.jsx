import TodoGenerator from "./TodoGenerator"
import TodoGroup from './TodoGroup';
function TodoList(){
    return(
            <>
                <h1>Todo List <span class="emoji clock" role="img" /></h1>
                <TodoGroup></TodoGroup>
                <TodoGenerator></TodoGenerator>
            </>
    )
}

export default TodoList;