import Head from "next/head"
import { useRouter } from "next/router"
import ProductsList from "../../components/ProductsList"
import { getCategories, getCategory } from "../../utils/api"

interface Category {
  id: number
  name: string
  slug: string
  products: object[]
}

const CategoryPage = (props: Category) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div></div>
  }

  return (
    <div>
      <Head>
        <title>{props.name} products</title>
      </Head>
      <ProductsList products={props.products} />
    </div>
  )
}

export default CategoryPage

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug)
  return { props: { category } }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map((_category) => {
      return {
        params: { slug: _category.slug },
      }
    }),
    fallback: true,
  }
}
