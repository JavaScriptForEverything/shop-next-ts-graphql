import type { 
	CreateReviewArgs, 
	DeleteReviewArgs, 
	GetReviewArgs, 
	ReviewDocument, 
	UpdateReviewArgs 
} from '@/shared/types/review'


export const getReviews = (): ReviewDocument[] => {

	return [
		{
			id: '1',
			user: '1',
			product: '1',
			review: 'review 1',
			liked: 0,
			disliked: 0,
		},
		{
			id: '2',
			user: '2',
			product: '2',
			review: 'review 2',
			liked: 0,
			disliked: 0,
		},
		{
			id: '3',
			user: '3',
			product: '3',
			review: 'review 3',
			liked: 0,
			disliked: 0,
		},
	]
}

export const getReview = ({ reviewId }: GetReviewArgs): ReviewDocument => {
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

export const createReview = ({ input }: CreateReviewArgs): ReviewDocument => {
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
export const updateReview = ({ input }: UpdateReviewArgs): ReviewDocument => {
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
export const deleteReview = ({ reviewId }: DeleteReviewArgs): ReviewDocument => {
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