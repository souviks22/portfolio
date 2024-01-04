import { Roboto_Mono } from "next/font/google"

const roboto = Roboto_Mono({ subsets: ['latin'] })

export default function Goal() {
    return (<div className="flex justify-center p-2">
        <div className="w-3/5">
            <section className={`${roboto.className} py-3`}>
                <h2 className="text-3xl">What is my motive?</h2>
            </section>
            <p>As a penultimate year student of B.Tech in Information Technology with a passion for coding, I am seeking an entry-level Software Development Engineer position where I can apply and further develop my programming skills. Eager to contribute my academic foundation in computer science, strong problem-solving abilities, and a proactive approach to software development. Excited to work with a dynamic team to contribute to innovative projects and gain hands-on experience in building scalable and efficient software solutions</p>
        </div>
    </div>)
}