import{ useState } from 'react';
function TodoItem(props){
    const [todoText, setTodo] = useState("");
    
    function setTodo(todo){
        todoText = todo;
    }
    return(
        <div>
            {todoText}
        </div>
    );
}