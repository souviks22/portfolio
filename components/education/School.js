import { useState } from "react"
import { FaArrowCircleDown, FaUserGraduate, FaCalendar, FaMarker } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { motion, AnimatePresence } from "framer-motion"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ['latin'], weight: '300' })

export default function School({ name, promo, course, period, location, marks }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleHandler = () => setIsExpanded(isExpanded => !isExpanded)

    return (<div className="w-full flex flex-col items-center mb-5">
        <div className={`${isExpanded ? 'bg-blue-300' : 'bg-blue-400'} w-full sm:w-3/5 flex justify-between items-start transition-colors duration-200 ${isExpanded ? 'rounded-t-md' : 'rounded-md'} p-3 z-10`}>
            <section className={poppins.className}>
                <p className="text-lg sm:text-2xl mb-4">{name}</p>
                {!isExpanded && <span className="text-sm text-blue-900">{promo}</span>}
            </section>
            <span className={`${isExpanded && 'rotate-180'} text-blue-900 text-xl cursor-pointer transition-transform duration-200 m-2 animate-pulse`} onClick={toggleHandler}>
                <FaArrowCircleDown />
            </span>
        </div>
        <AnimatePresence>
            {isExpanded &&
                <motion.section
                    className="bg-slate-100 flex flex-col w-full sm:w-3/5 rounded-b-md p-3"
                    initial={{ translateY: -40, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 100 }}
                    exit={{ translateY: -40, opacity: 0 }}
                >
                    <div className="flex items-center mb-3">
                        <span className="mr-3"><FaUserGraduate /></span>
                        <span>{course}</span>
                    </div>
                    <div className="flex items-center mb-3">
                        <span className="mr-3"><FaCalendar /></span>
                        <span>{period}</span>
                    </div>
                    <div className="flex items-center mb-3">
                        <span className="mr-3"><FaLocationDot /></span>
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center mb-3">
                        <span className="mr-3"><FaMarker /></span>
                        <span>{marks}</span>
                    </div>
                </motion.section>
            }
        </AnimatePresence>
    </div>)
}