import NextImage from "./Image"
import Link from "next/link"

const ProductsList = ({ products }) => {
  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
      {products.map((_product) => (
        <div
          key={_product.id}
          className="border rounded-lg hover:shadow-lg shadow-md"
        >
          <Link href={`/products/${_product.slug}`}>
            <a>
              <div className="bg-gray-100 p-4 border-2 min-w-min m max-w-max rounded-xl">
                <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                  <NextImage media={_product.image} />
                </div>
                <div className="flex items-center text-sm font-medium my-2 sm:mt-2 sm:mb-2">
                  <div className="flex justify-center align-middle items-center gap-2">
                    <div className="flex flex-col sm:flex-row items-center gap-1">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="text-purple-600"
                      >
                        <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
                      </svg>
                      <span className="text-black">4.94</span>
                    </div>
                    <div className=" text-center text-xs sm:text-sm  bg-green-300 py-0.5 px-2 rounded-full">
                      <span className="text-green-900">THC 78.2%</span>
                    </div>
                    <div className=" text-center text-xs sm:text-sm bg-purple-300 py-0.5 px-2 rounded-full">
                      <span className="text-purple-900">CBD 0.2%</span>
                    </div>
                  </div>
                </div>
                <div className="grid items-center sm:mt-1 sm:mb-4">
                  <div className="text-sm sm:text-md md:text-lg font-semibold">
                    {_product.title} sticker
                  </div>
                  <div className="text-xs sm:text-base text-purple-500">
                    · by Jetty Extracts
                  </div>
                </div>
                <div className="flex items-center justify-center mt-3 gap-2">
                  <button
                    type="button"
                    className="bg-purple-200 text-purple-700 text-sm sm:text-base font-bold px-3 sm:px-5 py-2 rounded-full"
                  >
                    🛒1
                  </button>
                  <button
                    type="button"
                    className="bg-blue-200 text-purple-700 text-sm sm:text-base font-bold px-3 sm:px-4 py-2 rounded-full"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
