import nightwind from "nightwind/helper"
import { useTheme } from "next-themes"

export default function Nightwind(props) {
  const { theme, setTheme } = useTheme()

  const toggle = (e) => {
    e.stopPropagation()
    if (theme === "light") {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    } else {
      document.documentElement.classList.remove("dark")
      setTheme("light")
    }
  }

  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      onClick={toggle}
      // onClick={() => nightwind.toggle()}
      className={`${
        props.size || "h-10"
      } w-auto cursor-pointer group mx-auto z-10`}
    >
      <circle
        cx="70"
        cy="70"
        r="70"
        fill="currentColor"
        className={`${props.moonColor || "text-indigo-600"} ${
          props.moonColorNight || "dark:text-amber-300"
        } ${props.transition || ""}`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.5612 138.876C55.6458 126.762 37 100.476 37 70C37 39.5244 55.6458 13.2383 82.5613 1.1239C115.227 7.04239 140 35.6281 140 70C140 104.372 115.227 132.958 82.5612 138.876Z"
        fill="currentColor"
        className={`${
          props.sunColor || "text-amber-300 group-hover:text-indigo-300"
        } ${
          props.sunColorNight ||
          "dark:text-indigo-400 dark:group-hover:text-amber-500"
        } ${props.transition || ""}`}
      />
    </svg>
  )
}
