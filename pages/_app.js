import PageLayout from '../components/PageLayout'
// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp ({ Component, pageProps }) {
  return <PageLayout>
    <Component {...pageProps} />
  </PageLayout>
}

export default MyApp
