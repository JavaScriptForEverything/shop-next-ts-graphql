import * as reviewController from '@/server/controller/reviewController'
import { CreateReviewArgs, DeleteReviewArgs, GetReviewArgs, UpdateReviewArgs } from '@/shared/types/review'


export const reviewResolvers = {
	Query: {
		reviews: () => reviewController.getReviews(),
		review: (_: undefined, args: GetReviewArgs) => reviewController.getReview(args),
	},
	Mutation: {
		createReview: (_: undefined, args: CreateReviewArgs) => reviewController.createReview(args),
		updateReview: (_: undefined, args: UpdateReviewArgs) => reviewController.updateReview(args),
		deleteReview: (_: undefined, args: DeleteReviewArgs) => reviewController.deleteReview(args),
		
	}
}