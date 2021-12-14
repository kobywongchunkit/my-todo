import { useDispatch } from 'react-redux';
import { REMOVE_TODO, TOGGLE_TODO } from '../constants/constants'

function TodoItem({todo}){
    const dispatch = useDispatch();
    function doneTodo(){
        dispatch({type:TOGGLE_TODO,payload: todo.id})
    }
    function removeTodo(){
        dispatch({type:REMOVE_TODO,payload: todo.id})
    }
    return(
            <p className={todo.done ?'todoItem done': 'todoItem undone'} onClick={doneTodo}         
              >{todo.text}<span className='cross' onClick={removeTodo}>❌</span></p>
    );
}

export default TodoItem;