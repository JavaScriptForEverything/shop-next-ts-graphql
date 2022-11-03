import type { ProductDocument } from '@/shared/types/product'
import type { Model } from 'mongoose'
import { model, models, Schema } from 'mongoose'


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

}, {
	timestamps: true
})

const productModel: Model<ProductDocument> = models.Product || model<ProductDocument>('Product', productSchema)
export default productModel