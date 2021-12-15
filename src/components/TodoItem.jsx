import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../apis/todo';
import { REMOVE_TODO, TOGGLE_DONE } from '../constants/constants'

function TodoItem({todo}){
    const dispatch = useDispatch();
    const {id, text ,done} = todo;
    
    function toggleTodo(){
        updateTodo(id,{done: !todo.done}).then(()=>
            dispatch({type:TOGGLE_DONE,payload: id})
        )
    }
    function removeTodo(event){
        event.stopPropagation();
        deleteTodo(id).then(()=>{
            dispatch({type:REMOVE_TODO,payload: id})
        })
        
    }
    return(
            <p className={`TodoItem-todo ${done ? "done" : ""}`} onClick={toggleTodo}>
                {text} <span className='cross' onClick={removeTodo}>❌</span>
            </p>
    );
}

export default TodoItem;