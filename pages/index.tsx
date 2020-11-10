import Head from 'next/head'
import Layout from '../layouts/layout'
import styles from '../styles/Home.module.scss'

import Nightwind from '../components/nightwind'

export default function Home() {
    
    return (
        <Layout>
            <Head>
                <title>Nightwind</title>
            </Head>

            <main className="text-center">
                <div className="pb-12 mx-auto max-w-screen-sm ">
                    <h1 className="text-indigo-600">Nightwind</h1>
                    <h2 className="">An automatic, <span className="dark:text-yellow-300 ">overrideable</span>, <span className="dark:border-b-2 dark-hover:border-indigo-600">customisable</span></h2>
                    <h2 className="">Tailwind plugin for dark mode</h2>
                </div>
                <div className="text-center pb-6">
                    <Nightwind />
                </div>
                <p className="">Click to see it in action</p>
            </main>

        </Layout>
    )
}