import Head from 'next/head'
import Layout from '../layouts/layout'
import Lines from '../layouts/background/lines'
import styles from '../styles/Home.module.scss'

import Nightwind from '../components/toggle'

export default function Home() {
    
    return (
        <Layout>
            <Head>
                <title>Nightwind</title>
            </Head>

            <main className="text-center">
                <div className="pt-12 mx-auto max-w-screen-sm">
                    <h1 className="text-indigo-700">Nightwind</h1>
                    {/* <h2>The dark side of Tailwind</h2> */}
                    <h3>An automatic, <span className="dark:text-yellow-200">overrideable</span>, <span className="text-primary-700 border-b-2 border-gray-100 dark:border-yellow-300 dark:duration-nightwind ">customisable</span></h3>
                    <h3 className=""><span className="text-teal-700">Tailwind</span> dark mode plugin</h3>
                </div>
                <div className="px-4">
                    <Lines />
                </div>
                <div className="my-12 text-center">
                    <Nightwind 
                        size="h-16 md:h-20"
                    />
                    <p className="mt-4">Click to see it in action</p>
                </div>
                <div className="p-4 text-gray-100 bg-indigo-800 hover:text-teal-100 hover:bg-teal-800 sm:bg-indigo-700 sm:hover:bg-teal-700">
                    <h3>This is responsive, hoverable and darkable</h3>
                </div>
                <div className="px-4">
                    <div className="nightcard">
                        <h3>This is a card with a custom class</h3>
                        <p>With a bunch of @apply color styles</p>
                        <p><span>and still compatible by default with nightwind</span></p>
                    </div>
                </div>

            </main>

        </Layout>
    )
}