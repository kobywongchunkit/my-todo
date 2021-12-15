import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoGroup(){
    const todoList = useSelector(state => state.todos);

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

export default TodoGroup;