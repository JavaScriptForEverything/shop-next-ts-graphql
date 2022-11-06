import { useQuery } from '@apollo/client'

import { ProductDocument } from '@/shared/types'
import { GET_PRODUCTS } from '@/graphql/query/product'
import { ProductGridView } from './product/grid'

import Grid from '@mui/material/Grid'


type ProductsQuery = {
	products: ProductDocument[]
}

export const ProductContainer = () => {
	const { data } = useQuery<ProductsQuery>(GET_PRODUCTS)

	if(!data) return <>Error Component</>
	// console.log(data.products)

	return (
		<Grid container spacing={1}>
			{data.products.map(product => (
				<Grid key={product.id} item xs={12} sm={6} md={4}>
					<ProductGridView product={product} />
				</Grid>
			))}
		</Grid>
	)
}
