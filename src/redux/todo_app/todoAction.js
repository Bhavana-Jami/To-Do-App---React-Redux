import { ADD_TASK, DELETE_TASK } from "./todoActionTypes";

export const addTask =(data)=>{
    return{
        type : ADD_TASK,
        payload : data
        
    }
}

export const deleteTask =(id)=>{
    return{
        type : DELETE_TASK,
        payload : {
            id : 1
        }
    }
}