import { RandomHLine } from 'react-random-shapes'
import { motion } from 'framer-motion'


{/*  
    <svg
        viewBox='0 0 600 300'
        width='600'
        height='300'
        baseProfile='full'>
        <motion.path
            d={genCurve(600, 300)}
            className= {randomClass()}

            initial={{ pathLength: 1, pathOffset: 0 }}
            animate={{ pathLength: 0, pathOffset: 1 }}
            transition={{ duration: 2}}
        />
    </svg> 
*/}

export default function Lines() {

    function GenerateLines() {
        const lines = 15

        return (
            [...Array(lines)].map((e, i) => 
            <li key={i}>
                < RandomHLine 
                    width={600} 
                    height={300} 
                    options={{
                        debug: false, 
                        numLines:1, 
                        classNameMid: `${randomClass()}`, 
                        styleMid:{
                            fill:"transparent", 
                            stroke: "currentColor",
                            strokeWidth: '1.5px'
                        }
                    }}
                />
            </li>)
        )
    }

    return(
        <div className="lines-container">
            <GenerateLines />
        </div>
    )
}

function randomClass() {
    const randomWeight = Math.floor(Math.random() * (10 - 3) + 3) * 100;
    const randomIndex = Math.floor(Math.random() * (9))
    const classes = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink']

    const randClass = `text-${classes[randomIndex]}-${randomWeight}`

    return randClass
}

// function anim(){
// 	document.querySelectorAll('svg circle').forEach((c,i)=>c.setAttribute('cy',50+Math.sin(performance.now()/1000+i)*25))
// }

// setInterval(anim,20)

