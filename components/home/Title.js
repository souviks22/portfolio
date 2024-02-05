import { Raleway } from "next/font/google"

import Head from "next/head"
import Image from "next/image"

const raleway = Raleway({ subsets: ['latin'] })

export default function Title() {
    return (<div className="flex flex-col sm:flex-row justify-center items-center p-2 m-5 select-none">
        <Head>
            <title>Souvik Sarkar | Home</title>
        </Head>
        <div className="mask pointer-events-none">
            <Image
                src={"/portrait.jpg"}
                alt={"Souvik Sarkar"}
                width={500}
                height={500}
            />
        </div>
        <div className={raleway.className}>
            <section className="py-5">
                <p>Hi I'm</p>
                <h2 className="text-5xl py-2">Souvik Sarkar</h2>
            </section>
            <section className="group">
                <h3 className="text-2xl">Software Development Engineer</h3>
                <p className="absolute hidden group-hover:block py-3">🌟 Yes I do code</p>
            </section>
        </div>
    </div>)
}