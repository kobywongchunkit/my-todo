import { UPDATE_TODO, TOGGLE_DONE ,REMOVE_TODO } from "../constants/constants";

const initLocal = {todos:[]};
const todoReducer = (state = initLocal , action) =>{
    switch(action.type){
        case UPDATE_TODO:
            return {...state, todos : [...state.todos, action.payload]}
        case TOGGLE_DONE:
            return {...state, todos : state.todos.map(item => (item.id === action.payload ? {...item, done: !item.done} : item))
            }
        case REMOVE_TODO:
            return {...state, todos : state.todos.filter(todo => todo.id !== action.payload)}
        default:
            return state;
    }
}

export default todoReducer;