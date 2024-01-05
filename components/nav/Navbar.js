import { useState, useEffect } from "react"
import { Roboto } from "next/font/google"

import NavLink from "./NavLink"

const roboto = Roboto({ subsets: ['latin'], weight: '300' })

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const scrollHandler = () => {
        if (window.scrollY > 100) setIsScrolled(true)
        else setIsScrolled(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    return (<div className={`fixed top-0 z-10 flex justify-center w-full ${roboto.className} text-lg p-3 ${isScrolled && 'bg-white'} transition-colors duration-200 ease-in-out select-none`}>
        <NavLink label={'Home'} href={'/'} />
        <NavLink label={'Education'} href={'/education'} />
        <NavLink label={'Work Experience'} href={'/work-experience'} />
        <NavLink label={'Projects'} href={'projects'} />
        <NavLink label={'Contact'} href={'contact'} />
    </div>)
}