import Head from "next/head"
import Container from "@/components/common/Container"
import MostRecent from "@/components/education/MostRecent"
import School from "@/components/education/School"

export default function Education() {
    return (<Container>
        <Head>
            <title>Education | Souvik Sarkar</title>
        </Head>
        <MostRecent />
        <School
            name={'Institute of Engineering and Management'}
            promo={'BTech in IT'}
            course={'Bachelor of Technology in Information Technology, MAKAUT'}
            period={'October 2021 - July 2025'}
            location={'Kolkata, West Bengal, India'}
            marks={'9.45 CGPA'}
        />
        <School
            name={'Krishnapur Adarsha Vidyamandir'}
            promo={'PCMB (10+2)'}
            course={'Higher Secondary, WBCHSE'}
            period={'May 2018 - June 2020'}
            location={'Kolkata, West Bengal, India'}
            marks={'95.8%'}
        />
        <School
            name={'Krishnapur Adarsha Vidyamandir'}
            promo={'Seconday (10)'}
            course={'Madhyamik Pariksha, WBBSE'}
            period={'January 2017 - March 2018'}
            location={'Kolkata, West Bengal, India'}
            marks={'92.7%'}
        />
    </Container>)
}