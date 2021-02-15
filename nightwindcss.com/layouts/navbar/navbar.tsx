import Nightwind from "../../components/nightwind"
import Github from "../../components/github"

export default function Navbar() {
  return (
    <header>
      <nav className="p-6 flex items-center justify-end max-w-screen-lg mx-auto">
        <div className="pr-6">
          <Nightwind size="h-7" />
        </div>
        <a
          href="https://github.com/jjranalli/nightwind"
          rel="noreferrer"
          target="_blank"
          aria-label="Link to Github"
        >
          <div className="w-8 h-8 text-gray-800 hover:text-indigo-600">
            <Github />
          </div>
        </a>
      </nav>
    </header>
  )
}
