import { useQuery } from '@apollo/client'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { GET_PRODUCT_BY_SLUG } from '@/graphql/query/product'
import { ProductDocument } from '@/shared/types'

import Carousel from '@/components/productDetails/carousel'

import Grid from '@mui/material/Grid'


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
		<Grid container>
			<Grid item xs={12} sm={6}>
				<Carousel 
					images={data.product.images}
				/>
			</Grid>

			<Grid item xs={12} sm={6}>
				<p>Right side</p>
			</Grid>
		</Grid>
			<pre>
				{JSON.stringify(data, null, 2)}
			</pre>
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


