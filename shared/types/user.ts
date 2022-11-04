// types === @/graphql/typesDefs/*

export type UserDocument = {
	id: string
	name: string
	email: string
	password: string
	confirmPassword?: string
	createdAt: Date
	updatedAt: Date
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
