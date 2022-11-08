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
	query getProductById($productId: ID!) {
		product(productId: $productId) {
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

