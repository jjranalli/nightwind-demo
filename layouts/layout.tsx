import Head from 'next/head'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import styles from './layout.module.scss'

import { useEffect } from 'react'
import nightwind from 'nightwind/helper'


export default function Layout({children}) {

    useEffect(() => {
        nightwind.addNightModeSelector()
        nightwind.watchNightMode()
    }, []);
    
    return(
        <>
        {/* <ThemeProvider> */}
            <Head>
                <title>next-template</title>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>

                {/* A maybe useful composable head?
                // <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                // <meta name="theme-color" content="#118b92" />
                // <link rel="manifest" href="/static/manifest/manifest.json" />
        
                // <meta name="description" content={description} />
                // <meta name="keywords" content={keywords} />
                // <meta name="author" content="..." />
        
                // <meta property="og:site_name" content="..." />
                // <meta property="og:title" content={title} />
                // <meta property="og:url" content={`...${language}/${url}`} />
                // <meta property="og:image" content={...} />
                // <meta property="og:description" content={description} />
                // <meta property="og:type" content="website" />
        
                // <meta name="twitter:title" content={title} />
                // <meta name="twitter:description" content={description} />
                // <meta name="twitter:image" content={...} />
                // <meta name="twitter:card" content="summary_large_image" />
        
                // <link rel="alternate" href={`...${url}`} hrefLang="nl" />
                // <link rel="alternate" href={`...${url}`} hrefLang="en" />
                // <link rel="alternate" href={`...${url}`} hrefLang="fr" />
        
                // <link rel="icon" type="image/png" href={...} sizes="16x16" />
                // <link rel="icon" type="image/png" href={...} sizes="32x32" />
                // <link rel="apple-touch-icon" href={...} />
                // <link rel="apple-touch-icon" sizes="180x180" href={...)} />
                // <link rel="mask-icon" href={...)} color="#d04819"/>
                // <link rel="shortcut icon" href={...} />
                // <meta name="theme-color" content="#118b92" /> */}
                
            </Head>
            
            <Navbar />

            {children}
            
            <Footer />
        {/* </ThemeProvider> */}
        </>
    )
}