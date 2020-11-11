import nightwind from 'nightwind/helper'

export default function Nightwind(props) {
    return (

        <svg 
        width="924" 
        height="924" 
        viewBox="0 0 924 924" 

        fill="none" 
        onClick={ () => nightwind.toggleNightMode() }
        className={`${props.size || 'h-10' } w-auto cursor-pointer group mx-auto`}>
        <circle 
            cx="462" 
            cy="462" 
            r="462" 

            fill="currentColor"
            className={`${props.sunColor || 'text-orange-300 group-hover:text-indigo-300'} ${props.sunColorNight || 'dark:text-indigo-400 dark:group-hover:text-orange-400'} ${props.transition || ''}`}/>
        <path 
            d="M216.5 462C216.5 806 624 924 462 924C206.844 924 0 717.156 0 462C0 206.844 206.844 0 462 0C621.5 0 216.5 118 216.5 462Z" 
            
            fill="currentColor"
            className={`${props.moonColor || 'text-indigo-600'} ${props.moonColorNight || 'dark:text-yellow-300'} ${props.transition || ''}`}/>
        </svg>
    )
}
