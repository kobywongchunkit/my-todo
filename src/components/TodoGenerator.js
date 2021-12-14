import{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_TODO } from '../constants/constants'
function TodoGenerator(){
    const [todoGeneratorText, setTodoGeneratorText] = useState("");
    const dispatch = useDispatch();
    function updateTodoGeneratorText(event){
        setTodoGeneratorText(event.target.value)
    }
    function addToList(){
        if(todoGeneratorText.length < 1) return;
        dispatch({type:UPDATE_TODO,payload: {id:Date.now(), text:todoGeneratorText, done:false}})
        setTodoGeneratorText("")
    }
    return(
        <div className='input-div'>
        <input value={todoGeneratorText} onChange={updateTodoGeneratorText}></input>
        <button className="Add-button" onClick={addToList}>add</button>
        </div>
    )
}
export default TodoGenerator;