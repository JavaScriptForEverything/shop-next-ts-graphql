// types === @/graphql/typesDefs/*

import { Types } from 'mongoose'

type Image = {
	public_id: string
	secure_url: string
	alt: string
	size: string
}
export type Info = {
	name: string
	value: string
}
export type Experience = {
	_id: Types.ObjectId
	title: string
	companyName: string
	joiningDate: Date
	currentStatus: 'active' | 'inactive'
	jobLocation: string
	logoBackgroundColor: string
}

export type UserDocument = {
	_id: Types.ObjectId
	name: string
	email: string
	password: string
	confirmPassword?: string
	createdAt: Date
	updatedAt: Date

	avatar: Image
	title: string
	about: string
	skills: string[]
	infoItems: Info[],
	experiences: Experience[]
}

type SignUpInput = {
	name: string
	email: string
	password: string
	confirmPassword: string
}

type LoginInput = {
	email: string
	password: string
}

type UpdateMeInput = {
	userId: String
	name: string
}


export type GetUserArgs = {
	userId: string
}
export type SignUpArgs = {
	input: SignUpInput
}
export type LoginArgs = {
	input: LoginInput
}

export type UpdateMeArgs = {
	input: UpdateMeInput
}
export type DeleteMeArgs = {
	userId: string
}
