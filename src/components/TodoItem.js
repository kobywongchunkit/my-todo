import { useDispatch } from 'react-redux';
import { TOGGLE_TODO } from '../constants/constants'

function TodoItem({todo}){
    const dispatch = useDispatch();
    function doneTodo(){
        dispatch({type:TOGGLE_TODO,payload: todo.id})
    }
    return(
            
            <div className="todoItem" onClick={doneTodo}         
            style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                background: todo.done ? 'LightGreen' : 'none',
              }}
              >{todo.text}</div>
    );
}

export default TodoItem;