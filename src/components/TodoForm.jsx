import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../features/todoSlice/todoSlice"
import { FaPlus } from "react-icons/fa"

export default function TodoForm() {
    const [value, setValue] = useState('')
    const refValue = useRef()
    const dispatch = useDispatch()
    const theme = useSelector(store => store.theme.themeValue)

    const submitHandler = e => {
        e.preventDefault()
        if (!value.trim()) return
        const newTodo = {
            id: new Date().getTime(),
            title: value,
            isCompleted: false,
        }
        dispatch(addTodo(newTodo))
        setValue('')
        refValue.current.focus()
    }

    return (
        <section>
            <form
                onSubmit={submitHandler}
                className="flex items-center gap-2"
            >
                <input
                    ref={refValue}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    type="text"
                    className={`flex-1 border ${theme === 'dark' ? 'placeholder-white text-white' : 'placeholder-black text-black'} border-gray-300 focus:ring-2 focus:ring-orange-400 rounded-lg px-3 py-2 outline-none shadow transition`}
                    placeholder="Add a new todo..."
                />
                <button className={`px-4 py-3 ${theme === 'dark' ? 'bg-yellow-700 text-white' : 'bg-orange-500 text-black'} cursor-pointer rounded-lg text-white font-semibold shadow hover:bg-orange-600 transition`}>
                    <FaPlus />
                </button>
            </form>
        </section >
    )
}