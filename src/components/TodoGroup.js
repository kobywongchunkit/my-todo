import TodoItem from "./TodoItem";

function TodoGroup(props){
    return(
        <>
        {
            props.todoList.map((item,index)=>{
                return <TodoItem 
                        key={Date.now()+index}
                        todoText={item}
                />;
            })
        }
        </>
    )
}

export default TodoGroup;