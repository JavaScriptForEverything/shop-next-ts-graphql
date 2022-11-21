
import { ProductDocument } from '@/shared/types'
import { ProductGridView } from './product/grid'

import Grid from '@mui/material/Grid'



type ContainerProps = {
	products: ProductDocument[]
}

export const ProductContainer = ({ products }: ContainerProps) => {

	if(!products.length) return <>loading ...</>
	// console.log(data.products)

	return (
		<Grid container spacing={1}>
			{products.map(product => (
				<Grid key={product.id} item xs={12} sm={6} md={4}>
					<ProductGridView product={product} />
				</Grid>
			))}
		</Grid>
	)
}
