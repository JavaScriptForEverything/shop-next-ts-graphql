
import { ProductDocument } from '@/shared/types'
import { GridViewProduct, ListViewProduct } from '@/components/home/rightSection/product'

import Grid from '@mui/material/Grid'
import { useAppSelector } from '@/store/hooks'



export const ProductContainer = () => {

	const { viewMode } = useAppSelector(state => state.layout)
	const { products, loading } = useAppSelector(state => state.product)

	// console.log(products)
	if(loading) return <>loading ...</>

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
