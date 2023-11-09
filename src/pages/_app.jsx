import '@/styles/globals.scss'
import MouseLight from "../components/MouseLight"; 


export default function App({ Component, pageProps }) {
  return (
    <>
    <MouseLight />
    <Component {...pageProps} />
    </>

  )
}

