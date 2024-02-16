import { Poppins, Fredoka } from "next/font/google"

const poppins = Poppins({ subsets: ['latin'], weight: '300' })
const fredoka = Fredoka({ subsets: ['latin'], weight: '300' })

export default function MostRecent() {
    return (<div className="w-full flex flex-col items-center px-2 py-10 my-3">
        <section className={`${poppins.className} text-4xl sm:text-5xl mb-2`}>IT Undergraduate</section>
        <section className={`${fredoka.className} p-3`}>Penultimate year</section>
    </div>)
}