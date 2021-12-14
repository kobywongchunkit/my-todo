import { useDispatch } from 'react-redux';
import { DONE_TODO } from '../constants/constants'

function TodoItem({todo}){
    const dispatch = useDispatch();
    function doneTodo(){
        dispatch({type:DONE_TODO,payload: todo.id})
    }
    return(
            
            <div className="todoItem" onClick={doneTodo}         
            style={{
                textDecoration: todo.done ? 'line-through' : 'none',
              }}
              >{todo.text}</div>
    );
}

export default TodoItem;