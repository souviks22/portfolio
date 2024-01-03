import { useRouter } from "next/router"

import Link from "next/link"

export default function NavLink({ label, href }) {
    const { pathname } = useRouter()
    return (<Link href={href} className={`p-2 mx-3 ${href === pathname && 'border-b-2'} border-slate-800 hover:border-b-2`}>
        <span className="text-center">{label}</span>
    </Link>)
}