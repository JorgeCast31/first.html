import Link from "next/link"
import NextImage from "./Image"

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a>
          <NextImage
            src="/logo.svg"
            alt="home"
            className="logo"
            height={44}
            width={150}
          />
        </a>
      </Link>
      <div>
        <div className="mt-1 relative rounded-md">
          <input
            type="text2"
            name="price"
            id="price"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Buscar...💊"
          />
        </div>
      </div>
      <button className="flex items-center">
        <NextImage height="150" width="150" src="/cart.svg" alt="Cart" />
        <span className="ml-3 font-semibold text-sm text-indigo-500 bg-indigo-200 p-2 rounded-full"></span>
      </button>
    </div>
  )
}

export default Navbar
