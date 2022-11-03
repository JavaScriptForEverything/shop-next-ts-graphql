import type { ReviewDocument } from '@/shared/types/review'
import type { Model } from 'mongoose'
import { model, models, Schema } from 'mongoose'


const reviewSchema = new Schema<ReviewDocument>({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	product: {
		type: Schema.Types.ObjectId,
		ref: 'Product',
		required: true
	},
	review: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		minlength: 5
	},
	liked: {
		type: Number,
		required: true,
		default: 0,
		min: 0
	},
	disliked: {
		type: Number,
		required: true,
		default: 0,
		min: 0
	}


}, {
	timestamps: true
})

const reviewModel: Model<ReviewDocument> = models.Review || model<ReviewDocument>('Review', reviewSchema)
export default reviewModel