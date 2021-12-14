import { UPDATE_TODO, DONE_TODO } from "../constants/constants";

const initLocal = {todo:[]};
const todoReducer = (state = initLocal , action) =>{
    switch(action.type){
        case UPDATE_TODO:
            return {...state, todo : [...state.todo, action.payload]}
        case DONE_TODO:
            return {...state, todo : state.todo.map(item => {
                if(item.id === action.payload)
                    item.done = !item.done
                return item
                    }
            )}
        default:
            return state;
    }
}

export default todoReducer;