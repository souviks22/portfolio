import { Roboto_Mono } from "next/font/google"

import Head from "next/head"
import Container from "@/components/common/Container"

const roboto = Roboto_Mono({ subsets: ['latin'], weight: '300' })

export default function NotFound() {
    return (<Container className="w-screen h-screen flex justify-center items-center">
        <Head>
            <title>Not Found</title>
        </Head>
        <div className={`${roboto.className} flex flex-col items-center`}>
            <span className="text-4xl mb-12">404 | Not Found</span>
            <span className="text-center">The page you are searching for does not exist</span>
        </div>
    </Container>)
}