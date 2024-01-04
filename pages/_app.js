import '@/styles/globals.css'
import '@/styles/mask.css'

import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/common/Footer'

export default function App({ Component, pageProps }) {
  return (<>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>)
}
