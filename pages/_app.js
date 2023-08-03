import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { ShopProvider } from './ShopContext'


export default function App({ Component, pageProps }) {
  return (
    <>
      <ShopProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      </ShopProvider>
    </>
  ) 
}
