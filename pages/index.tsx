import Head from 'next/head'
import Layout from '../layouts/layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
    
    return (
        <Layout>
            <Head>
                <title>next-template - Homepage</title>
            </Head>

            <main>
                <h1 className="">Next-template</h1>
            </main>

        </Layout>
    )
}