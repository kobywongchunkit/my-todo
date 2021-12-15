import TodoGroupFitered from './TodoGroupFitered';
function TodoListFiltered({done}){
    return(
            <>
                <h1>{done? "Done" : "Undone"} List</h1>
                <TodoGroupFitered done={done}></TodoGroupFitered>
            </>
    )
}

export default TodoListFiltered;