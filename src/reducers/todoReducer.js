import { UPDATE_TODO } from "../constants/constants";

const initLocal = {todo:[]};
const todoReducer = (state = initLocal , action) =>{
    switch(action.type){
        case UPDATE_TODO:
            return {...state, todo : [...state.todo, action.payload]}
        default:
            return state;
    }
}

export default todoReducer;