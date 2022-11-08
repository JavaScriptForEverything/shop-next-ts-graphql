import { useQuery } from '@apollo/client'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

import { GET_PRODUCT_BY_SLUG } from '@/graphql/query/product'
import { ProductDocument } from '@/shared/types'
import { Carousel, Comment, RatingAndReviews, RightPanel } from '@/components/productDetails'


import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Types } from 'mongoose'


type Props = {
	slug: InferGetServerSidePropsType<typeof getServerSideProps>
}
type Query = {
	product: ProductDocument
}
type Variables = {
		productId: string 
}

const ProductDetails = ({ slug }: Props) => {
	// console.log({ slug })
	
	const { data } = useQuery<Query, Variables>(GET_PRODUCT_BY_SLUG, { variables: {
		productId: slug
	}})

	if(!data) return <>No Product Found</>

	return (
		<>
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6}>
				<Paper sx={{ p: .5 }}>
					<Carousel images={data.product.images} />
				</Paper>
			</Grid>

			<Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
				<Paper sx={{ p: 2 }}>
					<RightPanel product={data.product} />
				</Paper>
			</Grid>

			<Grid item xs={12} sm={6} >
				<Paper sx={{ p: 2 }}>
					<Typography paragraph>Description</Typography>
					<Typography color='textSecondary'>{data.product.description}</Typography>
				</Paper>
			</Grid>

			<Grid item xs={12} sm={6} >
				<Paper sx={{ p: 2 }}>
					<Typography paragraph>Ratings & Reviews</Typography>
					<RatingAndReviews />
				</Paper>
			</Grid>
		</Grid>

		<Grid>
			<Grid>
				<input />

				<Comment review={{
					id: 'alksdjfalkf',
					user: new Types.ObjectId(),
					product: new Types.ObjectId(),
					review: 'quia et suscipit suscipit recusandae consequuntur expedita et cum repre',
					liked: 24,
					disliked: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				}}/>

			</Grid>
		</Grid>
		</>
	)
}
export default ProductDetails


export const getServerSideProps = ({ params }: GetServerSidePropsContext) => {
	if(!params) return { props: { slug: ''}}

	return { 
		props: {
			slug: params.slug
		}
	}
}


