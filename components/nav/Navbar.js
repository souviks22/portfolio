import { Roboto } from "next/font/google"

import NavLink from "./NavLink"

const roboto = Roboto({ subsets: ['latin'], weight: '300' })

export default function Navbar() {
    return (<div className={`fixed top-0 z-10 flex justify-center w-full ${roboto.className} text-lg p-3 select-none`}>
        <NavLink label={'Home'} href={'/'} />
        <NavLink label={'Education'} href={'/education'} />
        <NavLink label={'Work Experience'} href={'/work-experience'} />
        <NavLink label={'Projects'} href={'projects'} />
        <NavLink label={'Contact'} href={'contact'} />
    </div>)
}