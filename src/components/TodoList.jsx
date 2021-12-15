import { useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../apis/todos";
import { INIT_TODO } from "../constants/constants";
import TodoGenerator from "./TodoGenerator"
import TodoGroup from './TodoGroup';
function TodoList(){
    const dispatch = useDispatch();
    useEffect(()=>{
        api.get('/todos').then((response)=>{
            dispatch({type:INIT_TODO, payload:response.data});
        })
    });
    return(
            <>
                <h1>Todo List</h1>
                <TodoGroup></TodoGroup>
                <TodoGenerator></TodoGenerator>
            </>
    )
}

export default TodoList;