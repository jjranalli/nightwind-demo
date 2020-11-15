import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
const _ = require('lodash')

export default function Lines({height, width, paths}) {
    return (
        <>
            <svg
                viewBox={`0 0 ${width} ${height}`}
                width={width}
                height={height}
                baseProfile='full'>
                {paths.map((path, i) => (
                    <motion.path
                        key={i}
                        d={
                            `M 0 ${path.heightStart} 
                            C ${path.c1_1} ${path.c1_2}, 
                            ${path.c2_1} ${path.c2_2}, 
                            ${width} ${path.heightEnd}`
                        }
                        className= {`${path.randomClass}`}
                        style={{ 
                            fill:"transparent", 
                            stroke: "currentColor",
                            strokeWidth: '1.5px'
                        }}
                        
                        animate={{ 
                            d: 
                                `M 0 ${path.heightEnd} 
                                C ${path.c1_1} ${path.c1_2rev}, 
                                ${path.c2_1} ${path.c2_2rev}, 
                                ${width} ${path.heightStart}`
                        }}
                        transition={{ duration: `${path.duration}`, repeat: Infinity, repeatType: "reverse" }}
                    />
                ))}
            </svg> 
        </>
    );
}