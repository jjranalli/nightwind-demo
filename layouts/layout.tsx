import Head from 'next/head'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import styles from './layout.module.scss'

import { useEffect } from 'react'
import nightwind from 'nightwind/helper'


export default function Layout({children}) {

    useEffect(() => {
        nightwind.addNightTransitions()
        nightwind.initNightMode()
    }, []);
    
    return(
        <>
        {/* <ThemeProvider> */}
            <Head>
                <title>Nightwind</title>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
                
            </Head>
            <div className="relative min-h-screen flex flex-col justify-between">
                <Navbar />

                {children}
                
                <Footer />
            </div>
        {/* </ThemeProvider> */}
        </>
    )
}