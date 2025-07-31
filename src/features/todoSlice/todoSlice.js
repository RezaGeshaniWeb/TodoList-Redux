import { createSlice } from "@reduxjs/toolkit";

const getInitialTodos = () => {
    const data = localStorage.getItem('todos')
    return data ? JSON.parse(data) : []
}

const initialState = {
    todoValue: getInitialTodos()
}

const todoSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoValue = [...state.todoValue, action.payload]
            localStorage.setItem('todos', JSON.stringify(state.todoValue))
        },
        removeTodo: (state, action) => {
            state.todoValue = state.todoValue.filter(val => val.id != action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todoValue))
        },
        completedTodo: (state, action) => {
            const todo = state.todoValue.find(val => val.id == action.payload)
            if (todo) todo.isCompleted = !todo.isCompleted
            localStorage.setItem('todos', JSON.stringify(state.todoValue))
        }
    }
})

export default todoSlice.reducer
export const { addTodo, removeTodo, completedTodo } = todoSlice.actions