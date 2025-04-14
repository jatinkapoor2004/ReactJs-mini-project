import { createContext, useContext } from "react";

export const TodoContext = createContext({

    //creating blue print of varibles write data later 
    todos :[
        {
        id :1,
        todo : "Todo Message",
        completed :false,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete :(id) =>{}
})

export const useTodo =() =>{
    return useContext(TodoContext);
}

export const TodoProvider  = TodoContext.Provider