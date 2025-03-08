import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos:[{
        id:1,
        todo: "Todo Title",
        completed: false,
    }],
    addTodo: (todoTitle) => {},
    updateTodo: (todoTitle, id) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},

})

export const useTodoContext = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider