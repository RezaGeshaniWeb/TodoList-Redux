import { useSelector } from "react-redux";
import TodoList from "./TodoList";

export default function TodoCompleted() {
  const todolist = useSelector(store => store.todo.todoValue.filter(val => val.isCompleted))

  return (
    <section>
      <h2 className="text-lg font-medium mt-8 mb-2 text-green-500">Completed!</h2>
      <TodoList data={todolist} />
    </section>
  )
}