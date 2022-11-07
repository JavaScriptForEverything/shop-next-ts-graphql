import type { ProductDocument } from '@/shared/types/product'
import type { Model } from 'mongoose'
import { model, models, Schema } from 'mongoose'
import slug from 'slugify'


// export type ProductDocument = {
// 	summary: string
// 	description?: string
// }

const productSchema = new Schema<ProductDocument>({
	name: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		minlength: 5
	},
	slug: {
		type: String,
		default: '',
	},
	price: {
		type: Number,
		required: true,
		min: 1,
		set: function(price: number) { 		// because we set: price: Float! in GraphQL Schema
			return price.toFixed(2)
		}
	},
	summary: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		minlength: 10
	},
	description: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		minlength: 10
	},
	coverPhoto: {
		type: String,
		required: true,
	},
	images: [{
		type: String,
		required: true
	}]

}, {
	timestamps: true
})

productSchema.pre('save', function(this) {
	this.slug = slug(this.name, { lower: true })
})

export const Product: Model<ProductDocument> = models.Product || model<ProductDocument>('Product', productSchema)
export default Product