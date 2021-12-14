import { useDispatch } from 'react-redux';
import { TOGGLE_TODO } from '../constants/constants'

function TodoItem({todo}){
    const dispatch = useDispatch();
    function doneTodo(){
        dispatch({type:TOGGLE_TODO,payload: todo.id})
    }
    return(
            <div className={todo.done ?'todoItem done': 'todoItem undone'} onClick={doneTodo}         
              >{todo.text}</div>
    );
}

export default TodoItem;