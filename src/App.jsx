import './tailwind.css'
import { useSelector } from 'react-redux'
import TodoForm from './components/TodoForm'
import TodoUncompleted from './components/TodoUncompleted'
import TodoCompleted from './components/TodoCompleted'
import ThemeToggle from './components/ThemeToggle'
import Info from './components/Info'

export default function App() {
  const theme = useSelector(store => store.theme.themeValue)

  return (
    <main className={`min-h-screen flex flex-col items-center py-8 transition-colors ${theme === 'dark' ? 'bg-[#000138]' : 'bg-[#f5f3ff]'}`}>
      <ThemeToggle />
      <h1 className={`text-3xl font-bold mb-4 tracking-wide ${theme === 'dark' ? 'text-yellow-300' : 'text-orange-600'} transition-colors`}>
        Todo List
      </h1>
      <div className="w-full max-w-md space-y-6">
        <TodoForm />
        <TodoUncompleted />
        <TodoCompleted />
      </div>
      <Info />
    </main>
  )
}