import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '@/graphql/query/product'
import { ProductDocument } from '@/shared/types'


type GetProductsQuery = {
	products: ProductDocument[]
}

const ProductHome = () => {
	const { data } = useQuery<GetProductsQuery>(GET_PRODUCTS)

	return (
		<>
			<h2>Product Home page</h2>

			<pre>
				{JSON.stringify(data?.products, null, 2)}
			</pre>
		</>
	)
}
export default ProductHome
