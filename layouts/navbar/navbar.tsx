import Link from 'next/link'
import styles from './navbar.module.scss'
import Nightwind from '../../components/toggle'

import Github from '../../components/github'

export default function Navbar() {
    return(
        <header>
            <nav className="p-6 flex items-center justify-end max-w-screen-lg mx-auto">
                <div className="pr-6">
                    <Nightwind
                        size="h-7"
                    />
                </div>
                <Link href="https://github.com/jjranalli/nightwind">
                    <a aria-label="Link to Github"><Github /></a>
                </Link>
            </nav>
        </header>
    )
}