// import TodoGroup from "./TodoGroup"
import{ useState } from 'react';
import TodoGenerator from "./TodoGenerator"
import TodoGroup from './TodoGroup';
function TodoList(){
    const [todoList,setTodoList] = useState([]);

    function addToList(todo){
        setTodoList([...todoList,todo]);
    }
    return(
            <>
                <h1>Todo List</h1>
                <TodoGroup todoList={todoList}></TodoGroup>
                <TodoGenerator addToList={addToList}></TodoGenerator>
            </>
    )
}

export default TodoList;