import nightwind from 'nightwind/helper'

export default function Nightwind() {
    return (

        <svg 
        width="924" 
        height="924" 
        viewBox="0 0 924 924" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        onClick={ () => nightwind.toggleNightMode() }
        className="w-16 h-16 cursor-pointer group mx-auto md:w-20 md:h-20">
        <circle 
            cx="462" 
            cy="462" 
            r="462" 
            fill="currentColor"
            className="text-orange-300 group-hover:text-indigo-300 dark:text-indigo-500 dark-group-hover:text-orange-400 duration-300 transition-colors"/>
        <path 
            d="M216.5 462C216.5 806 624 924 462 924C206.844 924 0 717.156 0 462C0 206.844 206.844 0 462 0C621.5 0 216.5 118 216.5 462Z" 
            fill="currentColor"
            className="text-indigo-600 dark:text-yellow-300 duration-300 transition-colors"/>
        </svg>
    )
}
