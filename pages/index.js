import Head from "next/head"
import Container from "@/components/common/Container"
import Title from "@/components/home/Title"
import Objective from "@/components/home/Objective"

export default function Home() {
    return (<Container>
        <Head>
            <title>Home | Souvik Sarkar</title>
        </Head>
        <Title />
        <Objective
            label={"What is my motive?"}
            content={"As a penultimate year student of B.Tech in Information Technology with a passion for coding, I am seeking an entry-level Software Development Engineer position where I can apply and further develop my programming skills. Eager to contribute my academic foundation in computer science, strong problem-solving abilities, and a proactive approach to software development. Excited to work with a dynamic team to contribute to innovative projects and gain hands-on experience in building scalable and efficient software solutions."}
            tags={['Compter Science', 'Software Engineering', 'Passion']}
        />
        <Objective
            label={"Why am I interested in SWE?"}
            content={"My deep fascination with Software Engineering stems from the profound joy I find in crafting innovative solutions that address real-world challenges. Having worked extensively on web and mobile applications, I relish the process of transforming conceptual ideas into functional, user-centric products. The intellectual allure of Data Structures and Algorithms adds a layer of complexity that I find invigorating, driving me to continually enhance my problem-solving skills. The rapid advancements in modern technology, with its potential to achieve the seemingly impossible, excite me and keep my passion ablaze. Beyond the technical aspects, the collaborative nature of software development, where diverse teams synergize to overcome challenges, is an aspect I highly value. In essence, Software Engineering is not merely about writing code for me; it's about creating solutions that resonate with users and contribute positively to society, making it a field that aligns seamlessly with my professional aspirations."}
            tags={['Utility', 'Algorithms', 'Mental Growth', 'Satisfaction']}
        />
    </Container>)
}