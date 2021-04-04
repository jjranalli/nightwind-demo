import { useState, useEffect } from "react"
import Link from "next/link"
const _ = require("lodash")

import Head from "next/head"
import Layout from "../layouts/layout"
import Container from "../layouts/container"
import Lines from "../layouts/background/lines"
import ShuffleIcon from "../components/icons/shuffle"
import Card from "../components/card"

import Nightwind from "../components/nightwind"
import Wave from "../components/waves"
import FeaturesGrid from "../components/features-grid"
import Github from "../components/github"

export default function Home() {
  const lines = 8
  const width = 600
  const height = 300

  const [paths, setPaths] = useState([])

  function randomWave() {
    const randomWeight = Math.floor(Math.random() * (10 - 3) + 3) * 100
    const randomIndex = Math.floor(Math.random() * 16)
    const classes = [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "lightBlue",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
    ]
    const randomClass = `text-${classes[randomIndex]}-${randomWeight}`

    return randomClass
  }

  const handleSetPaths = () => {
    setPaths(paths.map((path) => ({ ...path, randomClass: randomWave() })))
  }

  useEffect(() => {
    function randomPath() {
      const randomHeight = () =>
        (((Math.random() * (2 / 5) + 4 / 5) * height) / 2).toFixed(2)
      const randomWidth = () =>
        (((Math.random() * (1 / 10) + 9 / 10) * width) / 2).toFixed(2)
      const randomBoolean1 = Math.random() < 0.5
      const randomBoolean2 = Math.random() < 0.5
      const duration = Math.floor(Math.random() * (12 - 5) + 5)

      const heightStart = randomHeight()
      const heightEnd = randomHeight()

      const c1_1 = randomWidth()
      const c1_2down =
        Math.sqrt(Math.pow(width / 2, 2) - Math.pow(Number(c1_1), 2)) +
        Number(heightStart)
      const c1_2up = c1_2down - (c1_2down - height / 2) * 2
      const c1_2 = randomBoolean1 ? c1_2down.toFixed(2) : c1_2up.toFixed(2)
      const c1_2rev = Number(c1_2) - (Number(c1_2) - height / 2) * 2

      const c2_1 = String(Number(randomWidth()) + 30)
      const c2_2down =
        Math.sqrt(Math.pow(width / 2, 2) - Math.pow(width - Number(c2_1), 2)) +
        Number(heightEnd)
      const c2_2up = c2_2down - (c2_2down - height / 2) * 2
      const c2_2 = randomBoolean2 ? c2_2down.toFixed(2) : c2_2up.toFixed(2)
      const c2_2rev = Number(c2_2) - (Number(c2_2) - height / 2) * 2

      const path = {
        heightStart: heightStart,
        heightEnd: heightEnd,
        c1_1: c1_1,
        c1_2: c1_2,
        c1_2rev: c1_2rev,
        c2_1: c2_1,
        c2_2: c2_2,
        c2_2rev: c2_2rev,
        duration: duration,
        randomClass: randomWave(),
      }

      setPaths((paths) => [...paths, path])

      // const c1CheckLength = Math.sqrt( Math.pow(Number(c1_1),2) + Math.pow(c1_2 - Number(heightStart), 2))
      // const c2CheckLength = Math.sqrt( Math.pow((width - Number(c2_1)),2) + Math.pow(Number(c2_2) - Number(heightEnd), 2))
      // const pathCheck = {
      //     'c1': {
      //         'c1_1': c1_1,
      //         'c1_2': c1_2,
      //         'c1_length': c1CheckLength
      //     },
      //     'c2': {
      //         'c2_1': c2_1,
      //         'c2_2': c2_2,
      //         'c2_length': c2CheckLength
      //     }
      // }
      // console.log(pathCheck)
    }

    _.times(lines, randomPath)
  }, [])

  return (
    <Layout>
      <Head>
        <title>Nightwind</title>
      </Head>

      <main className="text-center">
        <div className="md:pt-10 mx-auto max-w-screen-sm">
          <h1 className="leading-normal inline-block mx-auto bg-clip-text text-transparent bg-gradient-to-br from-violet-800 to-lightBlue-600">
            Nightwind
          </h1>
          <h3>
            An automatic,{" "}
            <span className="text-primary-600 border-b-2 border-gray-100 dark:border-yellow-300 dark:duration-nightwind ">
              customisable
            </span>
            , <span className="dark:text-yellow-200">overridable</span>
          </h3>
          <h3>Tailwind dark mode plugin</h3>

          <div className="py-16 space-y-8 px-4">
            <div>
              <h2 className="underline">TailwindCSS JIT test</h2>
              <p>
                Main Jit issue: plugin is not generating variant/screen classes
                as expected
              </p>
            </div>
            <div className="space-y-4">
              <h3>1) sm test</h3>
              <h3 className="test-sm">I have @apply sm: styling</h3>
              <h3 className="bg-gray-200 sm:bg-rose-600">
                I have inline sm: styling
              </h3>
              <p>Works as expected</p>
            </div>
            <div className="space-y-4">
              <h3>2) hover test</h3>
              <h3 className="test-hover">I have @apply hover: styling</h3>
              <h3 className="bg-gray-200 hover:bg-rose-600">
                I have inline hover: styling
              </h3>
              <p>
                Jit Issue: The '.dark .test-hover:hover' class is not being
                generated
              </p>
            </div>
            <div className="space-y-4">
              <h3>3) sm:hover test</h3>
              <h3 className="test-sm-hover">I have @apply sm:hover: styling</h3>
              <h3 className="bg-gray-200 sm:hover:bg-rose-600">
                I have inline sm:hover: styling
              </h3>
              <p>
                Jit Issue: The '@media (min-width: 640px) .dark
                .test-sm-hover:hover' class is not being generated
              </p>
              <p>
                Jit Issue: The '@media (min-width: 640px) .dark
                .sm\:hover\:bg-rose-600:hover' class is not being generated
              </p>
            </div>
          </div>

          <h3 className="pt-6 bg-gradient-to-r bg-clip-text text-transparent from-pink-400 to-orange-600">
            Now with automatic dark gradients
          </h3>
          <h3>and smart color mappings</h3>
          <div className="inline-block pt-4">
            <div
              className="flex rounded-lg overflow-hidden"
              style={{ width: "95vw", maxWidth: "500px" }}
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
        </div>
        <div className="px-2">
          <div className="lines-container">
            <Lines paths={paths} width={width} height={height} />
          </div>
        </div>
        <div className="mb-8 text-center">
          <div className="pb-8">
            <div className="pb-6 grid grid-cols-2 sm:grid-cols-4 max-w-screen-sm mx-auto cursor-default">
              {paths.map((path, i) => (
                <div
                  key={i}
                  className={`text-sm py-1 bg-white rounded-md m-2 border-2 ${
                    path.randomClass
                  } border-${path.randomClass
                    .split("-")
                    .splice(1, 2)
                    .join("-")} ring-${path.randomClass
                    .split("-")
                    .splice(1, 2)
                    .join("-")} ring-2 ring-opacity-30 hover:ring-opacity-60`}
                >
                  <p>{path.randomClass.split("-").splice(1, 2).join("-")}</p>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Link href="#0">
                <button
                  className="group px-8 py-2.5 rounded-md focus:outline-none text-white hover:text-blue-300 bg-gray-800 shadow-lg"
                  onClick={handleSetPaths}
                >
                  <div className="flex items-center">
                    <p className="pr-3">Shuffle colors</p>
                    <div className="transform group-hover:rotate-180 transition-transform duration-500 ease-in-out">
                      <ShuffleIcon />
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <Nightwind size="h-14 sm:h-16" />
          <p className="mt-5">Click to toggle dark mode</p>
        </div>
        <section className="pt-8">
          <div className="w-full bg-gradient-to-br from-rose-200 via-rose-400 to-rose-500">
            <Wave />
            <div className="pt-24 pb-12 md:pt-32">
              <Container>
                <div>
                  <h1 className="text-white text-3xl pb-8 md:text-5xl md:pb-16 nightwind-prevent">
                    Features
                  </h1>
                  <FeaturesGrid />
                  <div className="mt-11">
                    <a
                      href="https://github.com/jjranalli/nightwind"
                      rel="noreferrer"
                      target="_blank"
                      aria-label="Link to Github"
                    >
                      <button className="group px-8 py-2.5 rounded-md focus:outline-none text-white hover:text-blue-300 bg-black shadow-lg">
                        <div className="flex items-center">
                          <p className="pr-5">See it on Github</p>
                          <div className="w-7">
                            <Github />
                          </div>
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="pt-14 md:pt-20">
                  <h1 className="text-white text-2xl pb-4 md:text-4xl md:pb-6 nightwind-prevent">
                    Demo websites
                  </h1>
                  <div className="text-left">
                    <Card
                      href="https://night-tailwindcss.vercel.app"
                      srcImg="/card-tailwindcss.jpg"
                      srcImgHover="/cardhover-tailwindcss.jpg"
                      name="Tailwindcss.com (dark clone)"
                      descr="A clone of the original Tailwind website, with a Nightwind-generated dark mode"
                    />
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
