import api from "./api";

export const getTodos = () =>{
    return api.get('/todos');
}

export const addTodo = (todo) =>{
    return api.post('/todos',todo);
}

export const deleteTodo = (id) =>{
    return api.delete('/todos/'+id)
}

export const updateTodo = (id, updateField)=>{
    return api.put('/todos/'+id, updateField)
}