import TodoGroupFiltered from './TodoGroupFiltered';
function TodoListFiltered({done}){
    return(
            <>
                <h1>{done? "Done" : "Undone"} List</h1>
                <TodoGroupFiltered done={done}/>
            </>
    )
}

export default TodoListFiltered;