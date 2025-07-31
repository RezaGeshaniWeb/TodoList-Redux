import myPicture from '../assets/me5.webp'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useSelector } from 'react-redux'

export default function Info() {
    const theme = useSelector(store => store.theme.themeValue)

    return (
        <div className="hidden w-[170px] h-[170px] rounded-full border-[1px] border-orange-400 fixed bottom-[20px] left-[40px] lg:flex items-center justify-center select-none z-50 group">
            <div className="circle w-[165px] h-[165px] rounded-full">
                <img src={myPicture} alt="myPicture" className="w-full h-full rounded-full object-cover" />
            </div>
            <strong className={`absolute top-[45%] left-[-87px] -rotate-[90deg] text-[15px] italic ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`}>Frontend
                Developer</strong>
            <a href="https://www.linkedin.com/in/reza-geshani-web">
                <FaLinkedin className={`group-hover:visible text-[88px] absolute invisible transition-all duration-150 py-[5px] px-[30px] hover:opacity-900 top-[-30px] right-[-53px] ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`} />
            </a>
            <a href="https://www.instagram.com/rezageshani_web">
                <FaInstagram className={`group-hover:visible text-[88px] absolute invisible transition-all duration-150 py-[5px] px-[30px] hover:opacity-900 top-[20px] right-[-70px] ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`} />
            </a>
            <a href="https://github.com/RezaGeshaniWeb/">
                <FaGithub className={`group-hover:visible text-[88px] absolute invisible transition-all duration-150 py-[5px] px-[30px] hover:opacity-900 top-[70px] right-[-70px] ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`} />
            </a>
            <a href="mailto:rezageshaniweb@gmail.com">
                <MdEmail className={`group-hover:visible text-[88px] absolute invisible transition-all duration-150 py-[5px] px-[30px] hover:opacity-900 top-[110px] right-[-48px] ${theme === 'dark' ? 'text-slate-200' : 'text-gray-900'}`} />
            </a>
        </div>
    )
}