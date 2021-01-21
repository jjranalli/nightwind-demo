import { useState } from "react"
import Chevron from "../icons/chevron"

import FeatureIcon from "./feature-icons"
import Nightwind from "./toggle"

export default function FeaturesGrid() {
  function range(start, count) {
    return Array.apply(0, Array(count)).map((element, index) => index + start)
  }
  const number = range(1, 6)

  const [featureIndex, setFeatureIndex] = useState("")
  const [featureDescr, setFeatureDescr] = useState({})

  const iconColors = [
    ["text-primary-600", "hover:text-primary-600"],
    ["text-purple-600", "hover:text-purple-600"],
    ["text-red-600", "hover:text-red-600"],
    ["text-cyan-600", "hover:text-cyan-600"],
    ["text-yellow-500", "hover:text-yellow-500"],
    ["text-green-600", "hover:text-green-600"],
  ]
  const descriptions = [
    [
      "Automatic",
      <div>
        <p>
          <span className="font-semibold">
            Nightwind automatically generates a dark theme for your website
          </span>{" "}
          by reversing the color classes you use.
        </p>
        <p className="pt-2 pb-4">
          So for example a{" "}
          <span className="text-red-600 font-semibold">text-red-600</span>{" "}
          behaves like a{" "}
          <span className="text-red-300 font-semibold">text-red-300</span> in
          dark mode, and viceversa.{" "}
        </p>
        <Nightwind />
      </div>,
    ],
    [
      "Customisable",
      <div>
        <p>
          <span className="font-semibold">
            Nightwind is built around customisation.
          </span>{" "}
          You can fully manage dark mode in your tailwind.config.js, with
          fine-grained control on every aspect while making sure your design
          stays consistent.
        </p>
        <p className="pt-2">
          For example, Nightwind also works with your{" "}
          <span className="text-primary-600">custom colors</span>, and you can
          even set up custom transition durations and color scales.
        </p>
      </div>,
    ],
    [
      "Overridable",
      <p>
        You can still use the default{" "}
        <span className="font-semibold">'dark:'</span> variant to override the
        Nightwind settings for any element, directly in your markup. Just as you
        would normally do in Tailwind.
      </p>,
    ],
    [
      "Color mappings",
      <div>
        <p>
          Color mappings allow you to fine-tune your dark theme, change colors
          in batch and control how Nightwind behaves in dark mode.
        </p>
        <p className="pt-2">
          In this page, they're used to turn all 'rose' colors into 'blue' (and
          one yellow) in dark mode, using a{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/jjranalli/nightwind#hybrid-mapping"
            className="underline hover:text-rose-600 duration-150"
          >
            single line of code
          </a>
          .
        </p>
        <div className="flex justify-center py-6">
          <div
            className="flex flex-1 rounded-lg overflow-hidden"
            style={{ maxWidth: "500px" }}
          >
            <div className="flex-grow h-7 sm:h-8 bg-rose-50"></div>
            <div className="flex-grow h-7 sm:h-8 bg-rose-100"></div>
            <div className="flex-grow h-7 sm:h-8 bg-rose-200"></div>
            <div className="flex-grow h-7 sm:h-8 bg-rose-300"></div>
            <div className="flex-grow h-7 sm:h-8 bg-rose-400"></div>
            <div className="flex-grow h-7 sm:h-8 bg-rose-500"></div>
            <div className="flex-grow h-7 sm:h-8 bg-rose-600"></div>
            <div className="flex-grow h-7 sm:h-8 bg-rose-700"></div>
            <div className="flex-grow h-7 sm:h-8 bg-rose-800"></div>
            <div className="flex-grow h-7 sm:h-8 bg-rose-900"></div>
          </div>
        </div>
        <Nightwind />
      </div>,
    ],
    [
      "Plug & play",
      <div>
        <p>
          Dark modes can be a pain to manage, as you want to avoid the light
          flicker while persisting upon refresh. Nightwind comes with{" "}
          <span className="font-semibold">helper functions</span> which allow
          you to initialize and toggle dark mode easily.
        </p>
        <p className="pt-2">
          No complicated setup required, just{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/jjranalli/nightwind#helper-functions"
            className="underline hover:text-rose-600 duration-150"
          >
            add a script in your {`<head>`} and buttons
          </a>
          .
        </p>
      </div>,
    ],
    [
      "Complete",
      <div>
        <p>
          Nightwind supports all Tailwind variants and color classes, including
          those inside @apply custom classes.
        </p>
        <p className="pt-2">
          It also makes it easy to make any element stay the same in both light
          and dark modes, by simply adding a 'nightwind-prevent' class on it.
        </p>
        <div className="flex justify-center">
          <button className="text-white bg-black hover:text-blue-300 border-white border nightwind-prevent px-8 py-2 my-6 text-base shadow-xl rounded-md focus:outline-none">
            Nightwind-prevented
          </button>
        </div>
        <Nightwind />
      </div>,
    ],
  ]

  function handleClick(n) {
    if (featureIndex != n) {
      setFeatureIndex(n)
      setFeatureDescr(descriptions[n - 1][1])
    } else {
      setFeatureIndex("")
      setFeatureDescr({})
    }
  }

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {number.map((n, i) => (
          <li key={i} className="feature-box" onClick={() => handleClick(n)}>
            <div
              className={`
							px-3 py-1 flex items-center justify-between transition-colors duration-200
                                ${iconColors[n - 1][1]} 
                                ${
                                  featureIndex === n ? iconColors[n - 1][0] : ""
                                }
                            `}
            >
              <div className="flex items-center">
                <div className="ml-1 mr-3 my-2 w-9 sm:w-10">
                  <FeatureIcon icon={n} />
                </div>
                <p className="text-black">{descriptions[n - 1][0]}</p>
              </div>
              <div
                className={`w-7 transform transition-transform duration-300 ease-out ${
                  featureIndex === n ? "rotate-90" : ""
                }`}
              >
                <Chevron />
              </div>
            </div>
            <div className="px-3 sm:hidden">
              {featureIndex === n ? (
                <div className="mx-3 mt-1 mb-3">
                  <div className="pb-2 text-left">{featureDescr}</div>
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
      <div className="hidden sm:block sm:mt-8">
        {featureIndex ? (
          <div className="flex items-center py-9 px-8 my-3 max-w-screen-md mx-auto text-center bg-gradient-to-br from-white to-gray-100 rounded-lg overflow-hidden">
            <div className="text-lg">{featureDescr}</div>
          </div>
        ) : (
          <div className="my-14"></div>
        )}
      </div>
    </>
  )
}
