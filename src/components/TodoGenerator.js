import { useDispatch } from 'react-redux';
import { UPDATE_TODO } from '../constants/constants'
function TodoGenerator(){
    const dispatch = useDispatch();

    function addToList(event){
        const todoValue = event.target.todo.value;
        event.preventDefault();
        if(todoValue < 1) return;
        dispatch({type:UPDATE_TODO,payload: {id:Date.now(), text:todoValue, done:false}})
        event.target.todo.value = ""
    }

    return(
        <form className='input-div' onSubmit={event => addToList(event)}>
            <input type="text"  name="todo" required></input>
            <input type="submit" className="Add-button" value='add'/>
        </form>
    )
}
export default TodoGenerator;