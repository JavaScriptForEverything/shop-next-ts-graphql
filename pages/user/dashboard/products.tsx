import type { ProductDocument } from '@/shared/types'
import { useState } from 'react'
import { wrapper } from '@/store/index'
import { client } from '@/pages/_app'
import { GET_PRODUCTS } from '@/graphql/query/product'

import { AddProduct, FilterContainer, ProductTable, SearchBar } from '@/components/user/dashboard/page/products'
import { withDashboardPanel } from '@/shared/hoc'
import * as productReducer from '@/store/productReducer'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'






const Products = () => {
	const [ isAddProduct, setIsAddProduct ] = useState(true)

	const showAddProduct = () => {
		setIsAddProduct(true)
	}

	return (
		<Box>
		{ !isAddProduct ? (
			<>
			<Grid container justifyContent='flex-end'>
				<Grid item xs={12} sm={6} md={4}>
					<SearchBar />
				</Grid>
			</Grid>

			<Paper sx={{ my: 1, p: 1, }}>
				<FilterContainer onClickAddProduct={showAddProduct} />
			</Paper>

			<Paper sx={{ my: 1, p: 1 }}>
				<ProductTable /> 
			</Paper>
			</>

		) : (
			<Box sx={{ my: 1, p: 1, }}>
				<Box sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}>
					<Typography color='primary'>Add Product</Typography>
					<Button variant='outlined' onClick={() => setIsAddProduct(false)}>View</Button>
				</Box>

				<Box sx={{ my: 1 }}>
					<AddProduct />
				</Box>
			</Box>
		)}

		</Box>
	)
}
export default withDashboardPanel(Products)


type ProductsQuery = {
	products: ProductDocument[]
}
export const getServerSideProps = wrapper.getServerSideProps( ({ dispatch }) => async (ctx) => {
	const { data } = await client.query<ProductsQuery>({
		query: GET_PRODUCTS,
	})

	// every SSR dispatch must by store in memory in store/index.ts
	dispatch(productReducer.addProducts(data.products))

	return {
		props: {}
	}
})