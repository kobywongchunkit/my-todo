import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../apis/todo';
import { REMOVE_TODO, TOGGLE_DONE } from '../constants/constants'
import TodoUpdateModal from './TodoUpdateModal';

function TodoItem({todo}){
    const dispatch = useDispatch();
    const {id, text ,done} = todo;
    
    function toggleTodo(){
        updateTodo(id,{done: !todo.done}).then((reponse)=>
            dispatch({type:TOGGLE_DONE,payload: reponse.data.id})
        )
    }
    function removeTodo(event){
        event.stopPropagation();
        deleteTodo(id).then((reponse)=>{
            dispatch({type:REMOVE_TODO,payload: reponse.data.id})
        })
        
    }
    return(
        <p className={`TodoItem-todo ${done ? "done" : ""}`} onClick={toggleTodo}>
        {text} <span className='cross' onClick={removeTodo}>❌</span>
        <TodoUpdateModal id={id} text={text}/>
        </p>
    );
}

export default TodoItem;