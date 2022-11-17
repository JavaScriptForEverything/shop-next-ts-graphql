import type { 
	CreateReviewArgs, 
	DeleteReviewArgs, 
	GetReviewArgs, 
	ReviewDocument, 
	UpdateReviewArgs 
} from '@/shared/types/review'
import { Types } from 'mongoose'


export const getReviews = (): ReviewDocument[] => {

	return [
		{
			_id: new Types.ObjectId(),
			user: new Types.ObjectId(),
			product: new Types.ObjectId(),
			review: 'review 1',
			liked: 0,
			disliked: 0,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			_id: new Types.ObjectId(),
			user: new Types.ObjectId(),
			product: new Types.ObjectId(),
			review: 'review 2',
			liked: 20,
			disliked: 2,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			_id: new Types.ObjectId(),
			user: new Types.ObjectId(),
			product: new Types.ObjectId(),
			review: 'review 3',
			liked: 20,
			disliked: 2,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	]
}

export const getReview = ({ reviewId }: GetReviewArgs): ReviewDocument => {
	console.log({ reviewId })

	return {
			_id: new Types.ObjectId(),
			user: new Types.ObjectId(),
			product: new Types.ObjectId(),
			review: 'review 3',
			liked: 20,
			disliked: 2,
			createdAt: new Date(),
			updatedAt: new Date(),
	}
}

export const createReview = ({ input }: CreateReviewArgs): ReviewDocument => {
	console.log({ input })

	return {
			_id: new Types.ObjectId(),
			user: new Types.ObjectId(),
			product: new Types.ObjectId(),
			review: 'review 3',
			liked: 20,
			disliked: 2,
			createdAt: new Date(),
			updatedAt: new Date(),
	}
}
export const updateReview = ({ input }: UpdateReviewArgs): ReviewDocument => {
	console.log({ input })

	return {
			_id: new Types.ObjectId(),
			user: new Types.ObjectId(),
			product: new Types.ObjectId(),
			review: 'review 3',
			liked: 20,
			disliked: 2,
			createdAt: new Date(),
			updatedAt: new Date(),
	}
}
export const deleteReview = ({ reviewId }: DeleteReviewArgs): ReviewDocument => {
	console.log({ reviewId })

	return {
			_id: new Types.ObjectId(),
			user: new Types.ObjectId(),
			product: new Types.ObjectId(),
			review: 'review 3',
			liked: 20,
			disliked: 2,
			createdAt: new Date(),
			updatedAt: new Date(),
	}
}