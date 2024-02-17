import { useState, useEffect } from "react"
import { Roboto } from "next/font/google"
import { FaBars } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

import NavLink from "./NavLink"

const roboto = Roboto({ subsets: ['latin'], weight: '300' })

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpened, setIsOpened] = useState(false)
    const [isBigView, setIsBigView] = useState(null)

    const scrollHandler = () => {
        if (window.scrollY > 50) setIsScrolled(true)
        else setIsScrolled(false)
    }

    const toggleHandler = () => setIsOpened(isOpened => !isOpened)
    const navCloseHandler = () => setIsOpened(false)
    const windowResizeHandler = () => setIsBigView(window.innerWidth > 640)

    useEffect(() => {
        setIsBigView(window.innerWidth > 640)
        window.addEventListener('scroll', scrollHandler)
        window.addEventListener('resize', windowResizeHandler)
    }, [])

    return (<nav className={`fixed top-0 z-20 flex flex-col sm:flex-row justify-center items-center w-screen ${roboto.className} text-lg p-3 ${(isScrolled || isOpened) && 'bg-white'} transition-colors duration-200 ease-in-out select-none bg-opacity-90`}>
        <div className="w-screen text-3xl flex justify-end sm:hidden px-5 py-2" onClick={toggleHandler}>
            <div className={`${isOpened ? 'rotate-90' : 'rotate-0'} transition-transform duration-200`}>
                <FaBars />
            </div>
        </div>
        <AnimatePresence>
            {(isBigView || isOpened) &&
                <motion.div
                    className="w-screen flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <NavLink label={'Home'} href={'/'} onClick={navCloseHandler} />
                    <NavLink label={'Education'} href={'/education'} onClick={navCloseHandler} />
                    <NavLink label={'Work Experience'} href={'/work-experience'} onClick={navCloseHandler} />
                    <NavLink label={'Projects'} href={'projects'} onClick={navCloseHandler} />
                    <NavLink label={'Contact'} href={'contact'} onClick={navCloseHandler} />
                </motion.div>
            }
        </AnimatePresence>
    </nav >)
}