import '@/styles/globals.css'
import '@/styles/mask.css'

import Navbar from '@/components/nav/Navbar'

export default function App({ Component, pageProps }) {
  return (<>
    <Navbar />
    <Component {...pageProps} />
  </>)
}
