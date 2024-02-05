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
        if (window.scrollY > 100) setIsScrolled(true)
        else setIsScrolled(false)
    }

    const toggleHandler = () => setIsOpened(isOpened => !isOpened)
    const windowResizeHandler = () => setIsBigView(window.innerWidth > 640)

    useEffect(() => {
        setIsBigView(window.innerWidth > 640)
        window.addEventListener('scroll', scrollHandler)
        window.addEventListener('resize', windowResizeHandler)
    }, [])

    return (<div className={`fixed top-0 z-10 flex flex-col sm:flex-row justify-center items-center w-screen ${roboto.className} text-lg p-3 ${(isScrolled || isOpened) && 'bg-white'} transition-colors duration-200 ease-in-out select-none`}>
        <div className="w-screen text-3xl flex justify-end sm:hidden px-5 py-2" onClick={toggleHandler}>
            <FaBars />
        </div>
        <AnimatePresence>
            {(isBigView || isOpened) &&
                <motion.div
                    className="w-screen flex flex-col sm:flex-row justify-center items-center p-3 sm:p-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <NavLink label={'Home'} href={'/'} />
                    <NavLink label={'Education'} href={'/education'} />
                    <NavLink label={'Work Experience'} href={'/work-experience'} />
                    <NavLink label={'Projects'} href={'projects'} />
                    <NavLink label={'Contact'} href={'contact'} />
                </motion.div>
            }
        </AnimatePresence>
    </div >)
}