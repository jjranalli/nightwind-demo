import Link from 'next/link'
import styles from './footer.module.scss'

export default function Footer() {
    return(
        <footer className="py-6 text-center">
            <p>Made with 🌗  by <Link href="https://twitter.com/jj_ranalli"><a className="text-indigo-700 hover:text-teal-600 dark:hover:text-yellow-200 font-medium duration-200">Jacopo</a></Link></p>
        </footer>
    )
    
}