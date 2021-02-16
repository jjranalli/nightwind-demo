import Image from "next/image"

export default function Card(props) {
  return (
    <div className="my-6 w-full h-40 rounded-lg overflow-hidden sm:h-48 sm:my-8 max-w-xl mx-auto">
      <div className="relative w-full h-full">
        <a href={props.href} rel="noopener" target="_blank" className="group">
          <Image
            src={props.srcImg}
            alt={`Logo of ${props.name}`}
            layout="fill"
            className="object-cover"
          />
          <div className="sm:hidden">
            <div className="absolute bg-black nightwind-prevent w-full h-full opacity-40"></div>
            <div className="absolute text-white nightwind-prevent bottom-0 p-4 md:px-7 md:pb-5">
              <h2 className="text-xl pb-0 md:pb-1.5">{props.name}</h2>
              <p className="md:text-lg">{props.descr}</p>
            </div>
          </div>
          <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Image
              src={props.srcImgHover}
              alt={`Cover image of ${props.name}`}
              layout="fill"
              className="object-cover darken"
            />
            <div className="absolute text-white nightwind-prevent bottom-0 p-4 sm:px-7 sm:pb-5">
              <h2 className="pb-0 sm:pb-1.5 sm:text-3xl">{props.name}</h2>
              <p className="sm:text-lg">{props.descr}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
