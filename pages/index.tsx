import { GET_PRODUCTS } from '@/graphql/query/product'
import { ProductDocument } from '@/shared/types'
import { client } from './_app'
import * as productReducer from '@/store/productReducer'

import { FilterBrands, FilterPrice, FilterRating, FilterSize } from '@/components/home/leftPanel'
import { TitleBar, ProductContainer } from '@/components/home/rightSection'
import SearchBar from '@/components/home/searchBar'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { wrapper } from '../store'


const Home = () => {
	// // const { data } = useQuery<ProductsQuery>(GET_PRODUCTS)

	// const data = {
	// 	products: null
	// }

	// if(!data?.products) return <>Product not found</>

	return (
		<>

		<Grid container sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
			<Grid item xs={12} sm={6} md={3}>
				<SearchBar />
			</Grid>
		</Grid>

		<Grid container spacing={2}>
			<Grid item xs={12} md={3} sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1
			}}>
				<Paper> <FilterRating /> </Paper>
				<Paper> <FilterBrands /> </Paper>
				<Paper> <FilterPrice /> </Paper>
				<Paper> <FilterSize /> </Paper>
			</Grid>

			<Grid item xs={12} md={9}>
				<TitleBar />
				<Box sx={{ my: 1 }}>
					<ProductContainer />
				</Box>
			</Grid>
		</Grid>

		</>
	)
}
export default Home



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

