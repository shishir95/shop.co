import Layout from '@/common/navigation-bar/Layout'
import '../styles/globals.css'

function MyApp({Component, PageProps}){
    return <Layout><Component {...PageProps}></Component></Layout>
}

export default MyApp