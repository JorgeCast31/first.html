import Head from "next/head"
import Navbar from "../components/Navbar"
import ProductsList from "../components/ProductsList"

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>PharmaApp</title>
      </Head>
    </div>
  )
}

/* export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
} */

export default HomePage
