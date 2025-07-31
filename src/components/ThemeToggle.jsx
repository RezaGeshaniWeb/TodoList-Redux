import { useDispatch, useSelector } from "react-redux"
import { setDark } from "../features/themeSlice/themeSlice"

export default function ThemeToggle() {
    const theme = useSelector(store => store.theme.themeValue)
    const dispatch = useDispatch()

    return (
        <button
            onClick={() => dispatch(setDark())}
            className="absolute top-5 right-5 cursor-pointer p-2 text-xl"
            title={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
        >
            {theme === 'dark' ? "🌙" : "☀️"}
        </button>
    )
}