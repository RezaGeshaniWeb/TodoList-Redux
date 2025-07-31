import { useDispatch, useSelector } from "react-redux"
import { completedTodo, removeTodo } from "../features/todoSlice/todoSlice"
import { FaRegTrashAlt } from "react-icons/fa"
import { RiArrowGoBackFill } from "react-icons/ri"
import { TiTickOutline } from "react-icons/ti"

export default function TodoList({ data }) {
    const theme = useSelector(store => store.theme.themeValue)
    const dispatch = useDispatch()

    if (!data.length)
        return <p className="text-sm text-gray-500 italic">There is no list.</p>

    return (
        <ul className="space-y-2">
            {data.map(val =>
                <li
                    key={val.id}
                    className={`
                        flex items-center justify-between p-3 rounded-lg shadow
                        ${theme === 'dark' ? "bg-blue-800" : 'bg-violet-50'}
                        border border-gray-200
                    `}
                >
                    <span className={`flex-1 ${val.isCompleted ? "text-green-500 line-through" : ""}`}>
                        {val.title}
                    </span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => dispatch(removeTodo(val.id))}
                            className="p-1 rounded-full bg-red-100 text-red-500 hover:bg-red-200 hover:text-red-600 transition cursor-pointer"
                            title="حذف"
                        >
                            <FaRegTrashAlt />
                        </button>
                        {val.isCompleted ? (
                            <button
                                onClick={() => dispatch(completedTodo(val.id))}
                                className="px-2 py-1 rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition font-bold cursor-pointer"
                                title="بازگرداندن به لیست کارها"
                            >
                                <RiArrowGoBackFill />
                            </button>
                        ) : (
                            <button
                                onClick={() => dispatch(completedTodo(val.id))}
                                className="px-2 py-1 rounded bg-green-200 text-green-700 hover:bg-green-300 transition font-bold cursor-pointer"
                                title="تکمیل کار"
                            >
                                <TiTickOutline />
                            </button>
                        )}
                    </div>
                </li>
            )}
        </ul>
    )
}