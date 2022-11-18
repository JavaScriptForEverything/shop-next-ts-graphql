import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
	query getProducts {
		products {
			id
			name
			slug
			price
			summary
			coverPhoto
		}
	}
`
export const GET_PRODUCT_BY_SLUG = gql`
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
	}
`

