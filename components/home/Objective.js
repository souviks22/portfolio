import { useState } from "react"
import { Roboto_Mono, Lato } from "next/font/google"

const roboto = Roboto_Mono({ subsets: ['latin'], weight: '300' })
const lato = Lato({ subsets: ['latin'], weight: '300' })

export default function Objective({ label, content, tags = [] }) {
    const words = content.split(' ')
    const isLongContent = words.length > 80
    const contractedContent = isLongContent ? words.slice(0, 80) : words
    const [isContracted, setIsContracted] = useState(true)
    const expansionHandler = () => setIsContracted(isContracted => !isContracted)

    return (<div className="flex justify-center p-2 mb-10 cursor-default">
        <div className="sm:w-3/5 px-5 sm:px-1">
            <section className={`${roboto.className} py-3`}>
                <h2 className="text-3xl">{label}</h2>
            </section>
            <div className="block w-10 h-5 bg-sky-500" />
            <section className={`${lato.className} py-5`}>
                <span>{isContracted ? contractedContent.join(' ') : content}</span>
                {isLongContent &&
                    <span className="font-bold ml-1 cursor-pointer" onClick={expansionHandler}>{isContracted ? '...more' : '...less'}</span>
                }
            </section>
            <section className="flex flex-wrap">
                {tags.map(tag => <span className="text-sm text-sky-700 bg-sky-200 px-3 py-2 mr-2 mb-2 rounded">{tag}</span>)}
            </section>
        </div>
    </div>)
}