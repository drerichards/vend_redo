import PageLayout from '../components/PageLayout'
import 'bootstrap/dist/css/bootstrap.css'
// import '../styles/globals.css'


function MyApp ({ Component, pageProps }) {
  return <PageLayout>
    <Component {...pageProps} />
  </PageLayout>
}

export default MyApp
