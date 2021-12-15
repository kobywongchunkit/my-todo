import { ADD_TODO, TOGGLE_DONE ,REMOVE_TODO, INIT_TODO, UPDATE_TODO} from "../constants/constants";

const initLocal = {todos:[]};
const todoReducer = (state = initLocal , action) =>{
    switch(action.type){
        case ADD_TODO:
            return {...state, todos : [...state.todos, action.payload]}
        case TOGGLE_DONE:
            return {...state, todos : state.todos.map(item => (item.id === action.payload ? {...item, done: !item.done} : item))
            }
        case REMOVE_TODO:
            return {...state, todos : state.todos.filter(todo => todo.id !== action.payload)}
        case INIT_TODO:
            return {...state, todos : action.payload}
        case UPDATE_TODO:
            return {...state, todos : state.todos.map(item => (item.id === action.payload.data.id ? {...item, text: action.payload.data.text} : item))}
        default:
            return state;
    }
}

export default todoReducer;