import Head from 'next/head'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import styles from './layout.module.scss'

import { useEffect } from 'react'
import nightwind from 'nightwind/helper'


export default function Layout({children}) {

    const title = 'Nightwind'
    const subtitle = ' - The dark side of Tailwind'
    const description = 'An automatic, overridable, customisable Tailwind dark mode plugin.'

    useEffect(() => {
        nightwind.addNightTransitions()
        nightwind.initNightMode()
    }, []);
    
    return(
        <>
            <Head>
                <title>{title}</title>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
                
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={description} />
        
                <meta property="og:title" content={title} />
                <meta property="og:image" content='/og_image.jpg' />
                <meta property="og:description" content={description} />
                <meta property="og:url" content='https://nightwindcss.com' />
        
                <meta name="twitter:title" content={title + subtitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content='https://nightwindcss.com/twitter_card.jpg' />
                <meta name="twitter:card" content="summary_large_image" />

                <link rel="icon" type="image/svg+xml" href='/nightwind.svg'/>
                
            </Head>
            <div className="relative min-h-screen flex flex-col justify-between">
                <Navbar />

                {children}
                
                <Footer />
            </div>
        </>
    )
}