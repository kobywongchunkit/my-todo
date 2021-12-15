import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoGroupFiltered({done}){
    const todoList = useSelector(state => state.todos).filter(todo => (todo.done === done));

    return(
        <>
        {
            todoList.map((item)=>{
                return <TodoItem 
                        key={item.id}
                        todo={item}
                />;
            })
        }
        </>
    )
}

export default TodoGroupFiltered;