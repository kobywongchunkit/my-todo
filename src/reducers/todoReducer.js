import { UPDATE_TODO, TOGGLE_TODO ,REMOVE_TODO } from "../constants/constants";

const initLocal = {todo:[]};
const todoReducer = (state = initLocal , action) =>{
    switch(action.type){
        case UPDATE_TODO:
            return {...state, todo : [...state.todo, action.payload]}
        case TOGGLE_TODO:
            return {...state, todo : state.todo.map(item => {
                if(item.id === action.payload)
                    item.done = !item.done
                return item
                }
            )}
        case REMOVE_TODO:
            return {...state, todo : state.todo.filter(todo => todo.id !== action.payload)
                }
        default:
            return state;
    }
}

export default todoReducer;