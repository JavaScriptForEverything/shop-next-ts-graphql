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
		validate: function(this: UserDocument, val: string, ) {
			return this.password === val
		},
	},

	avatar: {
		public_id: String,
		secure_url: String,
		alt: String,
		size: String
	},
	title: String,
	about: String,
	skills: [String],
	infoItems: [{
		name: String,
		value: String
	}],
	experiences: [{
		title: String,
		companyName: String,
		joiningDate: Date,
		currentStatus: {
			type: String,
			enum: ['active', 'inactive']
		},
		jobLocation: String,
		logoBackgroundColor: String
	}]

}, {
	timestamps: true
})

export const User: Model<UserDocument> = models.User || model<UserDocument>('User', userSchema)
export default User