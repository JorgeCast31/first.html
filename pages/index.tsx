import Head from "next/head"
import Navbar from "../components/Navbar"
import ProductsList from "../components/ProductsList"

const HomePage = ({ ProductsList }) => {
  return (
    <div>
      <Head>
        <title>PharmaApp</title>
      </Head>
    </div>
  )
}

export default HomePage
