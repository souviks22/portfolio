import { useRouter } from "next/router"

import Link from "next/link"

export default function NavLink({ label, href, onClick }) {
    const { pathname } = useRouter()
    return (<Link
        href={href}
        className={`p-2 mx-3 border-b-2 ${href === pathname ? 'border-slate-600' : 'border-transparent'}  hover:border-slate-600`}
        onClick={onClick}
    >
        <span className="text-center">{label}</span>
    </Link>)
}