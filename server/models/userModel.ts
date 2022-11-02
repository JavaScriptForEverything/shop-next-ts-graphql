import { Model, model, models, Schema } from 'mongoose'
import isEmail from 'validator/lib/isEmail'

export type UserDocument = {
	id: string
	name: string
	email: string
	password?: string
	confirmPassword?: string
	createdAt: Date
	updatedAt: Date
}

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
		required: true,
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

const userModel: Model<UserDocument> = models.User || model<UserDocument>('User', userSchema)
export default userModel