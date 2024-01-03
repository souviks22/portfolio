import Image from "next/image"
import { Raleway } from "next/font/google"

const raleway = Raleway({
    subsets: ['latin']
})

export default function Title() {
    return (<div className="flex justify-center items-center p-2">
        <div className="mask">
            <Image
                src={"/portrait.jpg"}
                alt={"Souvik Sarkar"}
                width={500}
                height={500}
            />
        </div>
        <div className={raleway.className}>
            <h1 className="text-5xl py-2">Souvik Sarkar</h1>
            <h2 className="text-2xl py-1">Software Engineer</h2>
        </div>
    </div>)
}