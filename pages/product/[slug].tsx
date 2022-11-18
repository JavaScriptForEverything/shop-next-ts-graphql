import { Types } from 'mongoose'
import { gql, useQuery } from '@apollo/client'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

import { GET_PRODUCT_BY_SLUG } from '@/graphql/query/product'
import { ProductDocument } from '@/shared/types'

import RightPanel from '@/components/productDetails/rightPanel'
import RatingAndReviews from '@/components/productDetails/ratingAndReviews'
import AddComment from '@/components/productDetails/addComment'
import Comment from '@/components/productDetails/comment'
import Carousel from '@/components/productDetails/carousel'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { client } from '../_app'
import Router from 'next/router'



type Query = {
	product: ProductDocument
}
type Variables = {
		slug: string 
}

const ProductDetails = ({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	// console.log({ slug })
	
	// const { data } = useQuery<Query, Variables>(GET_PRODUCT_BY_SLUG, { variables: {
	// 	slug
	// }})
	// console.log({ data })

	// if(!data) return <>No Product Found</>

	// console.log(product)


	return (
		<>
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6}>
				<Paper sx={{ p: .5 }}>
					<Carousel images={product.images} /> 
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


export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
	// if(!params) return { props: { product: {}}}

	const slug = params?.slug as string

	// try {
		const { data } = await client.query<{ product: ProductDocument }, { slug: string }>({
			query: gql`
				query getProductById($slug: String!) {
					product(slug: $slug) {
						id
						name
						slug
						price
						summary
						description
						coverPhoto
						images
					}
				},
			`,
			variables: {
				slug
			}
		})

		const product = data.product

		return { 
			props: {
				product
			}
		}

	// } catch (err: any) {
	// 	console.log(err)
	// 	throw new Error(err.message)
	// }

	// throw new Error('No product Found')

}


