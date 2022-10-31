import { gql } from 'apollo-server-micro';

export const reviewTypeDefs = gql`
	extend type Query {
		reviews: [Review!]!
		review(reviewId: ID!): Review!	
	}

	extend type Mutation {
		createReview(input: CreateReviewInput): Review!
		updateReview(input: UpdateReviewInput): Review!
		deleteReview(reviewId: ID!): Review
	}

	type CreateReviewInput {
		user: ID! 				
		product: ID! 			
		review: String!
		liked: Int!
		disliked: Int!
	}
	type UpdateReviewInput {
		reviewId: ID!
		user: ID! 				
		product: ID! 			
		review: String!
		liked: Int!
		disliked: Int!
	}

	type Review {
		id: ID!
		user: ID! 				# user = userId then it will be resolve by field level resolvers 
		product: ID! 			# product === productID
		review: String 		# comment field
		liked: Int!
		disliked: Int!
	}
`