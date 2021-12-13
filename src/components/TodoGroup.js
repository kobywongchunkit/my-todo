import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoGroup(props){
    const [todoList, setTodoList] = useState([]);

    useEffect(() =>{
        setTodoList(props.todoList)
    },[props.todoList]);

    return(
        <>
        {
            todoList.map((item)=>{
                return <TodoItem 
                key={Date.now()+item}
                todoText={item}
                ></TodoItem>;
            }
            
            )
        }
        </>
    )
}

export default TodoGroup;