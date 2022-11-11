import type { UserDocument } from '@/shared/types/user'
import type { Model } from 'mongoose'
import { model, models, Schema } from 'mongoose'

import isEmail from 'validator/lib/isEmail'

export type Info = {
	name: string
	value: string
}
export type Experience = {
	_id: string
	title: string
	companyName: string
	joiningDate: Date
	currentStatus: 'active' | 'inactive'
	jobLocation: string
	logoBackgroundColor: string
}

type User = {
	name: string
	email: string
	password: string
	confirmPassword?: string

	avatar: string
	title: string
	summary: string
	skills: string[]
	infoItems: Info[],
	experiences: Experience[]
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