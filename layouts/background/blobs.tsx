// import { RandomHLine, RandomBlob } from 'react-random-shapes'
// import { useState, useEffect } from 'react'

// export default function Blobs() {
    // const size = useWindowSize()
    // const lines = 20

    // function GenerateLines() {
    //     return (
    //         [...Array(lines)].map((e, i) => < RandomHLine key width={size.width} height={size.height} options={{numLines:1, classNameMid: `${useRandomClass()}`, styleMid:{fill:"transparent", stroke: "currentColor"}}} />)
    //     )
    // }

    // // const classes = useNightwindClasses()

    // return(
    //     <div className="absolute w-screen h-full opacity-20 -z-10">
    //         <div className="blobs-container">
    
    //         </div>
    //     </div>
    // )
// }

// function useWindowSize() {
//     const [windowSize, setWindowSize] = useState({
//         width: undefined,
//         height: undefined
//       });
    
//       useEffect(() => {
//         // Handler to call on window resize
//         function handleResize() {
//         //   Set window width/height to state
//           setWindowSize({
//             width: window.innerWidth,
//             height: window.innerWidth / 2
//           });
//         }
        
//         // Add event listener
//         window.addEventListener("resize", handleResize);
//         // Call handler right away so state gets updated with initial window size
//         handleResize();
        
//         // Remove event listener on cleanup
//         return () => window.removeEventListener("resize", handleResize);
//       }, []); // Empty array ensures that effect is only run on mount
    
//     return windowSize;       
// }


// function useRandomClass() {
//     const randomWeight = Math.floor(Math.random() * (9 - 2) + 2) * 100;
//     const randomIndex = Math.floor(Math.random() * (4))
//     const classes = ['red', 'blue', 'indigo', 'pink']

//     const randClass = `text-${classes[randomIndex]}-${randomWeight}`

//     return randClass
// }
