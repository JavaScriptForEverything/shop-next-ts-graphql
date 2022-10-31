import type { DeleteMeArgs, GetUserArgs, LoginArgs, SignUpArgs, UpdateMeArgs  } from '@/shared/types/user'

type UserDocument = {
	id: string
	name: string
	email: string
	password?: string
	confirmPassword?: string
	createdAt: Date
	updatedAt: Date
}

// Return value must be same as @/graphql/typeDefs/userTypeDefs types
export const getUsers = (): UserDocument[] => {
	return [
		{
			id: 'alskdfaldf',
			name: 'riajul',
			email: 'riajul@gmail.com',
			// password: 'asdfasdf',
			createdAt: new Date(),
			updatedAt: new Date()
		}
	]
}

export const getUser = ({ userId }: GetUserArgs): UserDocument => {
	console.log({ userId })

	return {
		id: 'alskdfaldf',
		name: 'riajul',
		email: 'riajul@gmail.com',
		// password: 'asdfasdf',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}

export const signUp = ({ input }: SignUpArgs): UserDocument => {
	console.log({ input })

	return {
		id: 'alskdfaldf',
		name: 'riajul',
		email: 'riajul@gmail.com',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}

export const login = ({ input }: LoginArgs): UserDocument => {
	console.log({ input })

	return {
		id: 'alskdfaldf',
		name: 'riajul',
		email: 'riajul@gmail.com',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}

export const updateMe = ({ input }: UpdateMeArgs ): UserDocument => {
	console.log({ input })

	return {
		id: 'alskdfaldf',
		name: 'riajul',
		email: 'riajul@gmail.com',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}

export const deleteMe = ({ userId }: DeleteMeArgs): UserDocument => {
	console.log({ userId })

	return {
		id: 'alskdfaldf',
		name: 'riajul',
		email: 'riajul@gmail.com',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}