import '../styles/globals.css'
import '../lib/hexStytes.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <Component {...pageProps} />
    </>
  )
  

}

export default MyApp
