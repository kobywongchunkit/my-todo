import { ADD_TODO ,REMOVE_TODO, INIT_TODO, UPDATE_TODO} from "../constants/constants";

const init = {todos:[]};
const todoReducer = (state = init , action) =>{
    switch(action.type){
        case ADD_TODO:
            return {...state, todos : [...state.todos, action.payload]}
        case REMOVE_TODO:
            return {...state, todos : state.todos.filter(todo => todo.id !== action.payload)}
        case INIT_TODO:
            return {...state, todos : action.payload}
        case UPDATE_TODO:
            return {...state, todos : state.todos.map(item => (item.id === action.payload.data.id ? action.payload.data : item))}
        default:
            return state;
    }
}

export default todoReducer;