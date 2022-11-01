import { gql } from 'apollo-server-micro';

/* 			(1) 			(2) 				(3) 						(4)
		createReview(input: CreateReviewInput): Review!

		1: data.createReview 					: useMutation
		2: args.input  								: createReview: (_, args) => args.input
		3: $input: CreateReviewInput 	: gql`mutation addReview( $input: CreateReviewInput)`
		4: Review = ReviewDocument 		: type Document & ReviewDocument { ... } in reviewSchema.ts
*/

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

	input CreateReviewInput {
		user: ID! 				
		product: ID! 			
		review: String!
		liked: Int!
		disliked: Int!
	}
	input UpdateReviewInput {
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