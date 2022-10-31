import type { CreateReviewArgs, DeleteReviewArgs, GetReviewArgs, UpdateReviewArgs } from '@/shared/types/review'

type Review = {
	id: string
	user: string 				// user = userId then it will be resolve by field level resolvers 
	product: string 		// product === productID
	review: String 			// comment field
	liked: number
	disliked: number
}

export const getReviews = (): Review[] => {

	return [{
		id: '',
		user: '',
		product: '',
		review: '',
		liked: 0,
		disliked: 0,
	}]
}

export const getReview = ({ reviewId }: GetReviewArgs): Review => {
	console.log({ reviewId })

	return {
		id: '',
		user: '',
		product: '',
		review: '',
		liked: 0,
		disliked: 0,
	}
}

export const createReview = ({ input }: CreateReviewArgs): Review => {
	console.log({ input })

	return {
		id: '',
		user: '',
		product: '',
		review: '',
		liked: 0,
		disliked: 0,
	}
}
export const updateReview = ({ input }: UpdateReviewArgs): Review => {
	console.log({ input })

	return {
		id: '',
		user: '',
		product: '',
		review: '',
		liked: 0,
		disliked: 0,
	}
}
export const deleteReview = ({ reviewId }: DeleteReviewArgs): Review => {
	console.log({ reviewId })

	return {
		id: '',
		user: '',
		product: '',
		review: '',
		liked: 0,
		disliked: 0,
	}
}