import type { UserDocument } from '@/shared/types/user'
import type { Model } from 'mongoose'
import { model, models, Schema } from 'mongoose'

import isEmail from 'validator/lib/isEmail'


const userSchema = new Schema<UserDocument>({
	name: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
		validate: isEmail
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	confirmPassword: {
		type: String,
		// required: true,
		validate: function(val: string, ) {
			const user = this as UserDocument
			return user.password === val
		},
		// validate: function(this: UserDocument, val: string, ) {
		// 	return this.password === val
		// }
	},

}, {
	timestamps: true
})

export const User: Model<UserDocument> = models.User || model<UserDocument>('User', userSchema)
export default User