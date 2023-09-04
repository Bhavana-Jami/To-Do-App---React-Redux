import { ADD_TASK } from "./todoActionTypes"

const initialState = {
    taskList : []
}

const taskReducer =(state = initialState, action)=>{
    switch (action.type){
        case ADD_TASK : return{
            ...state,
            taskList : [action.payload, ...state.taskList]
        }
        default : return{
            ...state
        }
    }
}

export default taskReducer