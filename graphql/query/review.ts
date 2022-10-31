import { gql } from '@apollo/client'

export const GET_REVIEWS = gql`
	query getReviews {
		reviews {
			id
			product
			user
			review
			liked
			disliked
		}
	}
`