import { useState, useEffect } from 'react'
import Link from 'next/link'
const _ = require('lodash')

import Head from 'next/head'
import Layout from '../layouts/layout'
import Lines from '../layouts/background/lines'

import Nightwind from '../components/toggle'

export default function Home() {

    const lines = 12
    const width = 600
    const height = 300

    const [paths, setPaths] = useState([])

    function randomWave() {
        const randomWeight = Math.floor(Math.random() * (10 - 3) + 3) * 100;
        const randomIndex = Math.floor(Math.random() * (17))
        const classes = ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'lightBlue', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']
        const randomClass = `text-${classes[randomIndex]}-${randomWeight}`

        return randomClass
    }

    const handleSetPaths = () => {
        setPaths(paths.map((path) => ({...path, randomClass: randomWave()})))
    }

    useEffect(() => {
        function randomPath() {

            const randomHeight = () => ((Math.random() * (2/5) + (4/5)) * height/2).toFixed(2)
            const randomWidth = () => ((Math.random() * (1/10) + (9/10)) * width/2).toFixed(2)
            const randomBoolean1 = Math.random() < 0.5
            const randomBoolean2 = Math.random() < 0.5
            const duration = Math.floor(Math.random() * (12 - 5) + 5)
            
            const heightStart = randomHeight()
            const heightEnd = randomHeight()
    
            const c1_1 = randomWidth()
            const c1_2down = Math.sqrt( Math.pow(width/2, 2) - Math.pow(Number(c1_1), 2) ) + Number(heightStart)
            const c1_2up = c1_2down - (c1_2down - height/2) * 2
            const c1_2 = randomBoolean1 ? c1_2down.toFixed(2) : c1_2up.toFixed(2)
            const c1_2rev = (Number(c1_2) - (Number(c1_2) - height/2) * 2)
            
            const c2_1 = String(Number(randomWidth()) + 30)
            const c2_2down = Math.sqrt(Math.pow(width/2, 2) - Math.pow(width - Number(c2_1), 2)) + Number(heightEnd)
            const c2_2up = c2_2down - (c2_2down - height/2) * 2
            const c2_2 = randomBoolean2 ? c2_2down.toFixed(2) : c2_2up.toFixed(2)
            const c2_2rev = (Number(c2_2) - (Number(c2_2) - height/2) * 2)
    
            const path = {
                'heightStart': heightStart,
                'heightEnd': heightEnd,
                'c1_1': c1_1,
                'c1_2': c1_2,
                'c1_2rev': c1_2rev,
                'c2_1': c2_1,
                'c2_2': c2_2,
                'c2_2rev': c2_2rev,
                'duration': duration,
                'randomClass': randomWave()
            }
            
            setPaths(paths => [...paths, path])
            
            // const c1CheckLength = Math.sqrt( Math.pow(Number(c1_1),2) + Math.pow(c1_2 - Number(heightStart), 2))
            // const c2CheckLength = Math.sqrt( Math.pow((width - Number(c2_1)),2) + Math.pow(Number(c2_2) - Number(heightEnd), 2))
            // const pathCheck = {
            //     'c1': {
            //         'c1_1': c1_1,
            //         'c1_2': c1_2,
            //         'c1_length': c1CheckLength
            //     },
            //     'c2': {
            //         'c2_1': c2_1,
            //         'c2_2': c2_2,
            //         'c2_length': c2CheckLength
            //     }
            // }
            // console.log(pathCheck)
        }

        _.times(lines, randomPath)
    }, [])

    return (
        <Layout>
            <Head>
                <title>Nightwind</title>
            </Head>

            <main className="text-center">
                <div className="pt-12 mx-auto max-w-screen-sm">
                    <h1 className="text-indigo-700">Nightwind</h1>
                    <h3>An automatic, <span className="dark:text-yellow-200">overridable</span>, <span className="text-primary-700 border-b-2 border-gray-100 dark:border-yellow-300 dark:duration-nightwind ">customisable</span></h3>
                    <h3 className=""><span className="text-teal-700">Tailwind</span> dark mode plugin</h3>
                </div>
                <div className="px-2">
                    <div className="lines-container">
                        <Lines 
                            paths={paths} 
                            width={width} 
                            height={height}/>
                    </div>
                </div>
                <div className="mb-8 text-center">
                    <div className="pb-8 divide-y divide-lightBlue-700 hover:divide-pink-700">
                    
                        <div className="pb-6 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 max-w-screen-sm mx-auto">
                            {paths.map((path, i) => (
                                <p key={i} className={`py-1 ${path.randomClass}`}>{path.randomClass.split('-').splice(1, 2).join('-')}</p>
                            ))}
                        </div>
                        <div className="pt-10">
                            <Link href='#0'>
                                <button className="bg-indigo-200 hover:bg-indigo-300 ring-opacity-50 hover:ring-opacity-100 ring-pink-700 ring-offset-gray-100 ring-2 ring-offset-2 rounded-md p-2 px-8 focus:outline-none" 
                                        onClick={handleSetPaths}>Shuffle colors</button>
                            </Link>
                        </div>
                    </div>
                    <Nightwind 
                        size="h-16 md:h-20"
                    />
                    <p className="mt-4">Click to toggle dark mode</p>
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