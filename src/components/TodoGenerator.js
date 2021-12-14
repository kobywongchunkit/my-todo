import { useDispatch } from 'react-redux';
import { UPDATE_TODO } from '../constants/constants'
import { v4 as uuidv4 } from "uuid";
function TodoGenerator(){
    const dispatch = useDispatch();

    function addToList(event){
        const todoValue = event.target.todo.value;
        event.preventDefault();
        if(todoValue < 1) return;
        dispatch({type:UPDATE_TODO,payload: {id:uuidv4(), text:todoValue, done:false}})
        event.target.todo.value = ""
    }

    return(
        <form className='input-div' onSubmit={event => addToList(event)}>
            <input type="text"  name="todo" placeholder="input a new todo here" required></input>
            <input type="submit" className="Add-button" value='add'/>
        </form>
    )
}
export default TodoGenerator;