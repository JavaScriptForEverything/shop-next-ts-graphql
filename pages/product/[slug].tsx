import type { ProductDocument } from '@/shared/types'
import { useState } from 'react'
import { Types } from 'mongoose'
import { wrapper } from '@/store/index'
import { GET_PRODUCT_BY_SLUG } from '@/graphql/query/product'
import { useAppSelector } from '@/store/hooks'
import * as productReducer from '@/store/productReducer'
import { client } from '../_app'

import RightPanel from '@/components/productDetails/rightPanel'
import RatingAndReviews from '@/components/productDetails/ratingAndReviews'
import AddComment from '@/components/productDetails/addComment'
import ViewComment from '@/components/productDetails/viewComment'
import Carousel from '@/components/productDetails/carousel'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'


// used in viewComment.tsx
export type EditReviewTypes = {
	id: string,
	focus: boolean,
	rating: number | null,
	comment: string,
}

const ProductDetails = () => {
	const { product } = useAppSelector(state => state.product)

	// only used on review > Edit Click, else comment value will changed to 'Update'
	const [ editReview, setEditReview ] = useState<EditReviewTypes>({
		id: '',
		focus: false,
		rating: 0,
		comment: ''
	})
	
	

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
					<Typography paragraph id='ratingAndReview' >Ratings & Reviews</Typography>
					<RatingAndReviews />
				</Paper>
			</Grid>
		</Grid>

		<Grid container spacing={2} sx={{ my: 2 }} >
			<Grid item xs={12} md={8} sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 4
			}} >
				<AddComment editReview={editReview} />
				<Box>
					{[1,2].map(index => <ViewComment key={index}
						onEdit={setEditReview}
						review={{
							_id: new Types.ObjectId(),
							id: index.toString(),
							user: new Types.ObjectId(),
							product: new Types.ObjectId(),
							review: 'quia et suscipit suscipit recusandae consequuntur expedita et cum repre',
							liked: 24,
							disliked: 2,
							createdAt: new Date().toString(),
							updatedAt: new Date().toString()
						}}/>
					)}
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


