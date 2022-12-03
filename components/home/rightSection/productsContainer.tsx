
import { ProductDocument } from '@/shared/types'
import { GridViewProduct, ListViewProduct } from '@/components/home/rightSection/product'

import Grid from '@mui/material/Grid'
import { useAppSelector } from '@/store/hooks'



type ContainerProps = {
	products: ProductDocument[]
}

export const ProductContainer = ({ products }: ContainerProps) => {

	const { viewMode } = useAppSelector(state => state.layout)

	if(!products.length) return <>loading ...</>
	// console.log(data.products)

	return (
		<Grid container spacing={1}>
			
			{ products.map(product =>  viewMode === 'grid' ? (
				<Grid key={product.id} item xs={12} sm={6} md={4}>
					<GridViewProduct product={product} />
				</Grid>
			) : (
				<Grid key={product.id} item xs={12}>
					<ListViewProduct product={product} />
				</Grid>
			))}
		</Grid>
	)
}
