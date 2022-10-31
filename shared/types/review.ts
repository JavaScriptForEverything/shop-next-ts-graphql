
type CreateReviewInput = {
	id: string
	user: string 				// user = userId then it will be resolve by field level resolvers 
	product: string 		// product === productID
	review: String 			// comment field
	liked: number
	disliked: number
}
type UpdateReviewInput = {
	reviewId: string
	id: string
	user: string 				// user = userId then it will be resolve by field level resolvers 
	product: string 		// product === productID
	review: String 			// comment field
	liked: number
	disliked: number
}

export type GetReviewArgs = {
	reviewId: string
}
export type CreateReviewArgs = {
	input: CreateReviewInput
}
export type UpdateReviewArgs = {
	input: UpdateReviewInput
}
export type DeleteReviewArgs = {
	reviewId: string
}