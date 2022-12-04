import type { ProductDocument } from '@/shared/types'
import { wrapper } from '@/store/index'
import { GET_PRODUCT_BY_SLUG } from '@/graphql/query/product'
import { useAppSelector } from '@/store/hooks'
import * as productReducer from '@/store/productReducer'
import { client } from '../_app'

import RightPanel from '@/components/productDetails/rightPanel'
import RatingAndReviews from '@/components/productDetails/ratingAndReviews'
import AddComment from '@/components/productDetails/addComment'
import Comment from '@/components/productDetails/comment'
import Carousel from '@/components/productDetails/carousel'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'



const ProductDetails = () => {
	const { product } = useAppSelector(state => state.product)
	

	if(!product) return <>No Product Found</>

	return (
		<>
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6}>
				<Paper sx={{ p: .5 }}>
					<Carousel images={[ product.coverPhoto, ...product.images ]} /> 
				</Paper>
			</Grid>

			<Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
				<Paper sx={{ flex: 1, p: 2 }}>
					<RightPanel product={product} /> 
				</Paper>
			</Grid>

			<Grid item xs={12} sm={6} sx={{ display: 'flex' }} >
				<Paper sx={{ p: 2 }}>
					<Typography paragraph>Description</Typography>
					<Typography color='textSecondary'> {product.description} </Typography>
				</Paper>
			</Grid>

			<Grid item xs={12} sm={6} sx={{ display: 'flex' }} >
				<Paper sx={{ p: 2, width: '100%' }}>
					<Typography paragraph>Ratings & Reviews</Typography>
					<RatingAndReviews />
				</Paper>
			</Grid>
		</Grid>

		<Grid container spacing={2} sx={{ my: 2 }}>
			<Grid item xs={12} md={8} sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 4
			}} >
				<AddComment />
				<Box>
					{/* {[1,2].map(index => <Comment key={index}
						review={{
							_id: new Types.ObjectId(),
							user: new Types.ObjectId(),
							product: new Types.ObjectId(),
							review: 'quia et suscipit suscipit recusandae consequuntur expedita et cum repre',
							liked: 24,
							disliked: 2,
							createdAt: new Date(),
							updatedAt: new Date()
						}}/>
					)} */}
				</Box>

			</Grid>

			<Grid item xs={12} md={4} >
				<Paper sx={{ p: 1 }}>
					<Typography color='textSecondary'> used as Call of Action </Typography>
				</Paper>
			</Grid>
		</Grid>

		</>
	)
}
export default ProductDetails



type Query = {
	product: ProductDocument
}
type Variables = {
		slug: string 
}

export const getServerSideProps = wrapper.getServerSideProps(({ dispatch }) => async ({ params }) => {
	const slug = params?.slug as string

	// const { data } = await client.query<{ product: ProductDocument }, { slug: string }>({
	const { data } = await client.query<Query, Variables>({
		query: GET_PRODUCT_BY_SLUG,
		variables: { slug }
	})

	// every SSR dispatch must by store in memory in store/index.ts
	dispatch(productReducer.addProduct(data.product))

	return {
		props: {}
	}
})

// export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
// 	const slug = params?.slug as string

// 	// try {
// 		const { data } = await client.query<{ product: ProductDocument }, { slug: string }>({
// 			query: GET_PRODUCT_BY_SLUG,
// 			variables: { slug }
// 		})

// 		const product = data.product

// 		return { 
// 			props: {
// 				product
// 			}
// 		}

// 	// } catch (err: any) {
// 	// 	console.log(err)
// 	// 	throw new Error(err.message)
// 	// }

// 	// throw new Error('No product Found')

// }


