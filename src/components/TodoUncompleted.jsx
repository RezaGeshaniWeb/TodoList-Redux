import { useSelector } from "react-redux";
import TodoList from "./TodoList";

export default function TodoUncompleted() {
    const todolist = useSelector(store => store.todo.todoValue.filter(val => !val.isCompleted))
    const theme = useSelector(store => store.theme.themeValue)

    return (
        <section>
            <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-lg mb-2`}>Todolist</h2>
            <TodoList data={todolist} />
        </section>
    )
}