import{ useState } from 'react';
function TodoGenerator(props){
    const [todoGeneratorText, setTodoGeneratorText] = useState("");
    function updateTodoGeneratorText(event){
        setTodoGeneratorText(event.target.value)
    }
    function addToList(){
        props.addToList(todoGeneratorText)
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