import { motion } from 'framer-motion'
const _ = require('lodash')

export const whitelistedClasses = []

export default function Lines() {
        
    const lines = 10
    const width = 600
    const height = 300
        
    const randomClass = []
    // const randomClassHover = []
    const paths = []

    function randomWave() {
        const randomWeight = Math.floor(Math.random() * (10 - 3) + 3) * 100;
        // const hoverWeight = (randomWeight < 600 ? randomWeight + 200 : randomWeight - 200)
        const randomIndex = Math.floor(Math.random() * (9))
        const classes = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink']
        randomClass.push(`text-${classes[randomIndex]}-${randomWeight}`)
        whitelistedClasses.push(`text-${classes[randomIndex]}-${randomWeight}`)
        // randomClassHover.push(`text-${classes[randomIndex]}-${hoverWeight}`)
    }

    function randomPath() {
        const randomHeight = () => ((Math.random() * (2/5) + (4/5)) * height/2).toFixed(2)
        const randomWidth = () => ((Math.random() * (1/10) + (9/10)) * width/2).toFixed(2)
        const randomBoolean1 = Math.random() <= 0.5
        const randomBoolean2 = Math.random() <= 0.5
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
            'duration': duration
        }
        
        paths.push(path)
        
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

    _.times(lines, randomWave) 
    _.times(lines, randomPath)

    return (
        <>
          {[...Array(lines)].map((e, i) => (
            <svg
                key={i}
                viewBox={`0 0 ${width} ${height}`}
                width={width}
                height={height}
                baseProfile='full'>
                <motion.path
                    d={
                        `M 0 ${paths[i].heightStart} 
                        C ${paths[i].c1_1} ${paths[i].c1_2}, 
                        ${paths[i].c2_1} ${paths[i].c2_2}, 
                        ${width} ${paths[i].heightEnd}`
                    }
                    className= {`${randomClass[i]}`}
                    style={{ 
                        fill:"transparent", 
                        stroke: "currentColor",
                        strokeWidth: '1.5px'
                    }}
                    
                    animate={{ 
                        d: 
                            `M 0 ${paths[i].heightEnd} 
                            C ${paths[i].c1_1} ${paths[i].c1_2rev}, 
                            ${paths[i].c2_1} ${paths[i].c2_2rev}, 
                            ${width} ${paths[i].heightStart}`
                    }}
                    transition={{ duration: `${paths[i].duration}`, repeat: Infinity, repeatType: "reverse" }}
                />
            </svg> 
        ))}
        </>
    );
}