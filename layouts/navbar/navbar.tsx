import Link from 'next/link'
import styles from './navbar.module.scss'

import Github from '../../components/github'

export default function Navbar() {
    return(
        <header className="">
            <nav className="p-6 flex justify-end max-w-screen-lg mx-auto">
                <Link href="https://github.com/jjranalli/nightwind">
                    <a aria-label="Link to Github"><Github /></a>
                </Link>
            </nav>
        </header>
    )
}