import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
const _ = require('lodash')

export default function Lines(props) {

    // const width = 600
    // const height = 300
        
    // const [paths, setPaths] = useState([])

    // function randomPath() {
    //     const randomHeight = () => ((Math.random() * (2/5) + (4/5)) * height/2).toFixed(2)
    //     const randomWidth = () => ((Math.random() * (1/10) + (9/10)) * width/2).toFixed(2)
    //     const randomBoolean1 = Math.random() < 0.5
    //     const randomBoolean2 = Math.random() < 0.5
    //     const duration = Math.floor(Math.random() * (12 - 5) + 5)
        
    //     const heightStart = randomHeight()
    //     const heightEnd = randomHeight()

    //     const c1_1 = randomWidth()
    //     const c1_2down = Math.sqrt( Math.pow(width/2, 2) - Math.pow(Number(c1_1), 2) ) + Number(heightStart)
    //     const c1_2up = c1_2down - (c1_2down - height/2) * 2
    //     const c1_2 = randomBoolean1 ? c1_2down.toFixed(2) : c1_2up.toFixed(2)
    //     const c1_2rev = (Number(c1_2) - (Number(c1_2) - height/2) * 2)
        
    //     const c2_1 = String(Number(randomWidth()) + 30)
    //     const c2_2down = Math.sqrt(Math.pow(width/2, 2) - Math.pow(width - Number(c2_1), 2)) + Number(heightEnd)
    //     const c2_2up = c2_2down - (c2_2down - height/2) * 2
    //     const c2_2 = randomBoolean2 ? c2_2down.toFixed(2) : c2_2up.toFixed(2)
    //     const c2_2rev = (Number(c2_2) - (Number(c2_2) - height/2) * 2)

    //     const path = {
    //         'heightStart': heightStart,
    //         'heightEnd': heightEnd,
    //         'c1_1': c1_1,
    //         'c1_2': c1_2,
    //         'c1_2rev': c1_2rev,
    //         'c2_1': c2_1,
    //         'c2_2': c2_2,
    //         'c2_2rev': c2_2rev,
    //         'duration': duration
    //     }
        
    //     paths.push(path)
        
    //     // const c1CheckLength = Math.sqrt( Math.pow(Number(c1_1),2) + Math.pow(c1_2 - Number(heightStart), 2))
    //     // const c2CheckLength = Math.sqrt( Math.pow((width - Number(c2_1)),2) + Math.pow(Number(c2_2) - Number(heightEnd), 2))
    //     // const pathCheck = {
    //     //     'c1': {
    //     //         'c1_1': c1_1,
    //     //         'c1_2': c1_2,
    //     //         'c1_length': c1CheckLength
    //     //     },
    //     //     'c2': {
    //     //         'c2_1': c2_1,
    //     //         'c2_2': c2_2,
    //     //         'c2_length': c2CheckLength
    //     //     }
    //     // }
    //     // console.log(pathCheck)
    // }

    // _.times(props.lines, randomPath)

    return (
        <>
          {[...Array(props.lines)].map((e, i) => (
            <svg
                key={i}
                viewBox={`0 0 ${props.width} ${props.height}`}
                width={props.width}
                height={props.height}
                baseProfile='full'>
                <motion.path
                    d={
                        `M 0 ${props.paths[i].heightStart} 
                        C ${props.paths[i].c1_1} ${props.paths[i].c1_2}, 
                        ${props.paths[i].c2_1} ${props.paths[i].c2_2}, 
                        ${props.width} ${props.paths[i].heightEnd}`
                    }
                    className= {`${props.randomClass[i]}`}
                    style={{ 
                        fill:"transparent", 
                        stroke: "currentColor",
                        strokeWidth: '1.5px'
                    }}
                    
                    animate={{ 
                        d: 
                            `M 0 ${props.paths[i].heightEnd} 
                            C ${props.paths[i].c1_1} ${props.paths[i].c1_2rev}, 
                            ${props.paths[i].c2_1} ${props.paths[i].c2_2rev}, 
                            ${props.width} ${props.paths[i].heightStart}`
                    }}
                    transition={{ duration: `${props.paths[i].duration}`, repeat: Infinity, repeatType: "reverse" }}
                />
            </svg> 
        ))}
        </>
    );
}